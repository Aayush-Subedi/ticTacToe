import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./board";
import Game from "./game";

export default function Square(props) {
  // A functional component that represents a square in the game board
  return (
    <button className="square" onClick={props.onClick}>
      {" "}
      {/* renders a button element with a class of "square" and an onClick event */}
      {props.value} 
      {/* displays the value passed in as a prop */}
    </button>
  );
}


