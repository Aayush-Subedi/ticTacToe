import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./board";
import Game from "./game";



export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
