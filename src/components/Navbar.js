import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 0 10px;

  a {
    margin: 0 5px;
  }
`;
export default function Navbar() {
  return (
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/rooms">Rooms</Link>
      </Nav>
    </header>
  );
}
