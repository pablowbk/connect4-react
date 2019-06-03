import React from 'react';
import Row from './Row';

const GameBoard = ({handleClick, board, isTurn}) => {
  const rows = board.map((row,i) => <Row key={i} row={row} handleClick={handleClick} isTurn={isTurn} />);
  return (
    <div className="GameBoard">
      {rows}
    </div>
  );
}

export default GameBoard;
