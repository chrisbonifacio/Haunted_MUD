import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import TileMap from "./components/TileMap";
import { Route, Link } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [map, setMap] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("/adv/rooms/")
      .then(res => {
        const data = res.data;
        data.sort(function(a, b) {
          return a.id - b.id || a.name.localeCompare(b.name);
        });
        setRooms(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  if (rooms.length > 0) {
    let initialRoom = rooms[0];

    console.log(initialRoom);
  }

  function getById(id) {
    return rooms.find(room => room.id === id);
  }

  // function recursiveCoordinates(room, previous, coordinates) {
  //   let n = getById(room && room.n_to_id);
  //   let e = getById(room && room.e_to_id);
  //   let s = getById(room && room.s_to_id);
  //   let w = getById(room && room.w_to_id);

  //   if (n !== previous) {
  //     recursiveCoordinates(n, room);
  //   }

  //   if (e !== previous) {
  //     recursiveCoordinates(e, room);
  //   }

  //   if (s !== previous) {
  //     recursiveCoordinates(s, room);
  //   }

  //   if (w !== previous) {
  //     recursiveCoordinates(w, room);
  //   }
  // }

  return (
    <div className="App">
      <h1>World</h1>
      <Navbar />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route
        path="/rooms"
        render={() => {
          return <TileMap rooms={rooms} />;
        }}
      />
    </div>
  );
}
