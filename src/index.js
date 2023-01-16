import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Square from "./square";
import Board from "./board";
import Game from "./game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />); //renders Game Component
