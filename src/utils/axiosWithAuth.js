import axios from "axios";

export default function axiosWithAuth() {
  const key = localStorage.getItem("key");
  const headers = { "Content-Type": "application/json" };
  if (key) {
    headers.Authorization = `Token ${key}`;
  }
  return axios.create({
    baseURL: "https://build-week-mud.herokuapp.com/api",
    timeout: 1000,
    headers: headers
  });
}

// Test: https://lambda-mud-test.herokuapp.com/api
// Build: https://build-week-mud.herokuapp.com/api
