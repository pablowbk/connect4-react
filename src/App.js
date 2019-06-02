import React from 'react';
import './App.css';

import GameBoard from './GameBoard'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playOne: 1,
      playTwo: 2,
      isTurn: null,
      board: [],
      boardActive: true
    };

  }

  componentDidMount() {
    this.createGrid()
  }

  createGrid = () => {
    let board = [];
    for (let rows = 0; rows < 6; rows++) {
      let row = [];
      for (let columns = 0; columns < 7; columns++) {
        row.push(null)
      }
      board.push(row)
    }

    this.setState(prevState => (
      {
        board: board,
        isTurn: this.state.playOne,
        boardActive: true
      }
    ))
  }

  changeTurn = () => {
    return this.state.isTurn === this.state.playOne ? this.state.playTwo : this.state.playOne
  }

  handleClick = (column) => {
    if (this.state.boardActive) {
      let boardNew = this.state.board;
      for (let row = 5; row >= 0; row--) {
        if (!boardNew[row][column]) {
          boardNew[row][column] = this.state.isTurn;
          break;
        }
      }
      this.setState((prevState) => (
        {
          board: boardNew,
          isTurn: this.changeTurn()
        }
      ));
    console.table(this.state.board);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Connect 4</h1>
          <h2>{`Go `}
            <span style={this.state.isTurn <= 1 ? {color: "blue"} : {color: "red"}}>
              {`Player ${this.state.isTurn <= 1 ? " One!" : " Two!" }`}
            </span>
          </h2>
        </header>

        <div className="Board-container">
          <GameBoard board={this.state.board} handleClick={this.handleClick}/>
        </div>

        <button
          className="Reset"
          onClick={() => this.createGrid()}
        >
          Reset Game
        </button>
      </div>
    );
  }

}

export default App;
