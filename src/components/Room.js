import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: dodgerblue;
  border: 3px solid #000;
`;

export default function Room({
  id,
  size,
  x,
  y,
  n_to_id,
  s_to_id,
  e_to_id,
  w_to_id
}) {
  // const { id, title, description } = props.room;
  // console.log(id);

  return (
    <>
      <Tile
        style={{
          width: size,
          height: size,
          left: `${x}px`,
          top: `${y}px`,
          borderTop: n_to_id && "none",
          borderBottom: s_to_id && "none",
          borderRight: e_to_id && "none",
          borderLeft: w_to_id && "none"
        }}
      >
        <p>{id}</p>
      </Tile>
    </>
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
