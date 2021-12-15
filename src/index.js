import React from "react";
import ReactDOM from "react-dom";
import Routess from "./Routess";
import CardListContext from "./context/CardListContext";
import "./index.css";
import { useContext } from "react";

ReactDOM.render(
  <React.StrictMode>
    <Routess />
  </React.StrictMode>,
  document.getElementById("root")
);
