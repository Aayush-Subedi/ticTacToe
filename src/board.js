import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Square from "./square";
import Game from "./game";

export default class Board extends React.Component {
  renderSquare(i) {
    // function that renders a single square
    return (
      <Square
        value={this.props.squares[i]} // receives value from the squares array in the parent component
        onClick={() => this.props.onClick(i)} // passes the click event to the parent component
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)} 
          {this.renderSquare(1)} 
          {this.renderSquare(2)} 
        </div>
        <div className="board-row">
          {this.renderSquare(3)} 
          {this.renderSquare(4)} 
          {this.renderSquare(5)} 
        </div>
        <div className="board-row">
          {this.renderSquare(6)} 
          {this.renderSquare(7)} 
          {this.renderSquare(8)} 
        </div>
      </div>
    );
  }
}
