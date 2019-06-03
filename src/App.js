import React from 'react';
import './App.css';
import GameBoard from './GameBoard'

const c4rows = 6;
const c4columns = 7;


// const possibleWins = [
//   //checking horizontal 4in-a-row
//   [0,1,2,3],
//   [1,2,3,4],
//   [2,3,4,5],
//   [3,4,5,6], //end of row1
//   [7,8,9,10],
//   [8,9,10,11],
//   [9,10,11,12],
//   [10,11,12,13], //end of row2
//   [14,15,16,17],
//   [15,16,17,18],
//   [16,17,18,19],
//   [17,18,19,20], //end of row3
//   [21,22,23,24],
//   [22,23,24,25],
//   [23,24,25,26],
//   [24,25,26,27], //end of row4
//   [28,29,30,31],
//   [29,30,31,32],
//   [30,31,32,33],
//   [31,32,33,34], //end of row5
//   [35,36,37,38],
//   [36,37,38,39],
//   [37,38,39,40],
//   [38,39,40,41], //end of row6
//
//   //checking for column matches
//   [0,7,14,21],
//   [7,14,21,28],
//   [14,21,28,35],//end of column 1
//   [1,8,15,22],
//   [8,15,22,29],
//   [15,22,29,36], //end of column 2
//   [2,9,16,23],
//   [9,16,23,30],
//   [16,23,30,37], //end of column 3
//   [3,10,17,24],
//   [10,17,24,31],
//   [17,24,31,38], //end of column 4
//   [4,11,18,25],
//   [11,18,25,32],
//   [18,25,32,39], //end of column 5
//   [5,12,19,26],
//   [12,19,26,33],
//   [19,26,33,40], //end of column 6
//   [6,13,20,27],
//   [13,20,27,34],
//   [20,27,34,41], //end of column 7
//
//   //checking for diagonal matches
//   [0,8,16,24], //starting from row1-col1
//   [1,9,17,25],
//   [2,10,18,26],
//   [3,11,19,27],
//   [6,12,18,24], //reverse
//   [5,11,17,23],
//   [4,10,16,22],
//   [3,9,15,21],
//   [7,15,23,31],  //starting from row2-col1
//   [8,16,24,32],
//   [9,17,25,33],
//   [10,18,26,34],
//   [13,19,25,31], // reverse
//   [12,18,24,30],
//   [11,17,23,29],
//   [10,16,22,28],
//   [14,22,30,38],  //starting from row3-col1
//   [15,23,31,39],
//   [16,24,32,40],
//   [17,25,33,41],
//   [20,26,32,38], // reverse
//   [19,25,31,37],
//   [18,24,30,36],
//   [17,23,29,35],
//   [21,15,9,3],  //starting from row4-col1
//   [22,16,10,4],
//   [23,17,11,5],
//   [24,18,12,6],
//   [27,19,11,3], // reverse
//   [26,18,10,2],
//   [25,17,9,1],
//   [24,16,8,0],
//   [28,22,16,10],  //starting from row5-col1
//   [29,23,17,11],
//   [30,24,18,12],
//   [31,25,19,13],
//   [34,26,18,10], // reverse
//   [33,25,17,9],
//   [32,24,16,8],
//   [31,23,15,7],
//   [35,29,23,17],  //starting from row6-col1
//   [36,30,24,18],
//   [37,31,25,19],
//   [38,32,26,20],
//   [41,33,25,17], // reverse
//   [40,32,24,16],
//   [39,31,23,15],
//   [38,30,22,14],
// ];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playOne: 1,
      playTwo: 2,
      isTurn: null,
      board: [],
      boardActive: true,
      winner: null
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

  // checkY = (board) => {
  //   for (let row = 3; row < 5; row++) {
  //     for (let col = 0; col < 6; col++) {
  //       if (board[row][col]) {
  //         if (board[row][col] === board[row - 1][col] &&
  //             board[row][col] === board[row - 2][col] &&
  //             board[row][col] === board[row - 3][col]) {
  //           return board[row][col];
  //         }
  //       }
  //     }
  //   }
  // }

  // calculateWinner = (board) => {
  //   return this.checkY(board) || this.checkZright(board) || this.checkZleft(board) || this.checkX(board) || this.checkDraw(board);
  // }

// CHECKING FOR MATCHES - START
  checkVertical(board) {
    for (let r = 3; r < c4rows; r++) {
      for (let c = 0; c < c4columns; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkHorizontal(board) {
    for (let r = 0; r < c4rows; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] &&
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalRight(board) {
    for (let r = 3; r < c4rows; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalLeft(board) {
    for (let r = 3; r < c4rows; r++) {
      for (let c = 3; c < c4columns; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDraw(board) {
    for (let r = 0; r < c4rows; r++) {
      for (let c = 0; c < c4columns; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }

// CHECKING FOR MATCHES - END

  handleClick = (column) => {
    let boardNew = this.state.board.slice();
    if (this.state.boardActive) {
      for (let row = 5; row >= 0; row--) {
        if (!boardNew[row][column]) {
          boardNew[row][column] = this.state.isTurn;
          break;
        }
      } //for loop ends

    let result = this.checkAll(boardNew);
    if (result === this.state.playOne) {
      this.setState({ board: boardNew, boardActive: false, winner: 1 });
    } else if (result === this.state.playTwo) {
      this.setState({ board: boardNew, boardActive: false, winner: 2 });
    } else if (result === 'draw') {
      this.setState({ board: boardNew, boardActive: false, winner: 0 });
    } else {
      this.setState({ board: boardNew, isTurn: this.changeTurn() });
    }

  } else {

    console.table(this.state.board);
    } // if statement ends

  }

  render() {
    const {isTurn, board, boardActive, winner} = this.state;

    const playing = <h2>{`Go `}
      <span style={isTurn <= 1 ? {color: "blue"} : {color: "red"}}>
        {`Player ${isTurn <= 1 ? " One!" : " Two!" }`}
      </span>
    </h2>

    const winnerIs = () => {
      if (winner > 0) {
        return (
          <h2>{`Winner is `}
            <span style={isTurn <= 1 ? {color: "blue"} : {color: "red"}}>
              {`Player ${isTurn <= 1 ? " One!" : " Two!" }`}
            </span>
          </h2>
        )
      }
      if (winner === 0) { return (<h2>It's a Draw!</h2>)}
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Connect 4</h1>
          {boardActive ? playing : winnerIs()}

        </header>

        <div className="Board-container">
          <GameBoard
            board={board}
            isTurn={isTurn}
            handleClick={this.handleClick}
          />
        </div>

        <footer>
          {boardActive
            ? null
            : <h2 className="GameOver">Game Over</h2>
          }

          <button
            className="Reset"
            onClick={() => this.createGrid()}
          >
            Reset Game
          </button>
        </footer>
      </div>
    );
  }

}

export default App;
