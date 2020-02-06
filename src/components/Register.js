import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;
  margin: 0 auto;

  label {
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    margin: 10px 0;
  }

  input {
    width: 100%;
    margin-left: 5px;
    border: none;
    border-bottom: 0.5px solid gray;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 10px auto 0;
    width: 100%;
  }
`;

export default function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("/registration/", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password1"
            value={newUser.password1}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="password2"
            value={newUser.password2}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </Form>
      <p>
        Have an account already? <Link to="/login">Login</Link>
      </p>
    </>
  );
}
