/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;
