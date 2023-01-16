import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Square from "./square";
import Board from "./board";

export default class Game extends React.Component {
  constructor(props) {
    // constructor is called when the component is first created
    super(props);
    this.state = {
      // initial state of the component
      history: [
        {
          squares: Array(9).fill(null), // initializes an array of 9 elements with null values
        },
      ],
      stepNumber: 0, // the current step number
      xIsNext: true, // boolean value to determine if it's X's turn or O's turn
    };
  }

  handleClick(i) {
    // function that handles a click event on a square
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      // checks if there is a winner or if the square is already filled
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; // updates the square with the corresponding player's value
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext, // switch to the other player's turn
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0, // if step number is even, it's X's turn, if it's odd, it's O's turn
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      // maps over the history array to create a list of moves
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  // function that checks if there is a winner
  const lines = [
    [0, 1, 2], // possible winning combinations
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // checks if all elements in the winning combination are the same
      return squares[a]; // returns the winner
    }
  }
  return null;
}
