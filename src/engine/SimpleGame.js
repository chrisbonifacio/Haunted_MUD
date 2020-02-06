import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems";

export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{
          width: "100%",
          height: 600,
          backgroundColor: "white",
          border: "1px solid #000"
        }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200, y: 200, renderer: <Box /> }
        }}
      />
    );
  }
}
