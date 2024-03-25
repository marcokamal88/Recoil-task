/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRecoilState } from "recoil";
import isAuthState from "./authState";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [, setIsLoggedIn] = useRecoilState(isAuthState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "https://dummyjson.com/auth/login",
          {
            username: userName,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          console.log(res.data);
        })
        .catch((error) => console.error(error));
      setIsLoggedIn(true);
    } catch (error) {
      console.log(`error`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
