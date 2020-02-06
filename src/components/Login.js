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
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("/login/", login)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("key", res.data.key);
      })
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
            value={login.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </Form>
      <p>
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </>
  );
}
