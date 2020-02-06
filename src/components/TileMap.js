import React from "react";
import styled from "styled-components";
import Room from "./Room";

const Map = styled.div`
  position: relative;
  width: 750px;
  height: 750px;
  background: lightgreen;
  margin: 0 auto;
`;

export default function TileMap(props) {
  const { rooms } = props;

  let initialRoom = null;

  for (let room of rooms) {
    room.size = 50;
  }

  if (rooms.length > 0) {
    initialRoom = rooms[0];
    initialRoom.x = 200;
    initialRoom.y = 200;
  }

  function findById(id) {
    const foundRoom = rooms.find(room => room.id === id);
    return foundRoom;
  }

  function assignCoordinates() {
    const queue = [];

    for (let i = 0; i < rooms.length; i++) {
      let current = rooms[i];
      let room_to_north = current.n_to_id;
      let room_to_south = current.s_to_id;
      let room_to_east = current.e_to_id;
      let room_to_west = current.w_to_id;

      if (room_to_north) {
        let north_room = findById(room_to_north);
        north_room.y = current.y - current.size;
        north_room.x = current.x;
      }

      if (room_to_south) {
        let south_room = findById(room_to_south);
        south_room.y = current.y + current.size;
        south_room.x = current.x;
      }

      if (room_to_east) {
        let east_room = findById(room_to_east);
        east_room.y = current.y;
        east_room.x = current.x + current.size;
      }

      if (room_to_west) {
        let west_room = findById(room_to_west);
        west_room.y = current.y;
        west_room.x = current.x - current.size;
      }
    }

    console.log("QUEUE:", queue);
  }

  assignCoordinates();

  return (
    <Map>
      {rooms.map(room => (
        <Room {...room} />
      ))}
    </Map>
  );
}

/*
{
  id: 1
  title: "asd"
  description: "asdasd"
  n_to_id: null
  s_to_id: null
  e_to_id: null
  w_to_id: null
  inventory_id: 1
  enemy_id: 1
}
 */
