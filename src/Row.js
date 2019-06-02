import React from 'react';
import Cell from './Cell';

const Row = ({handleClick, row}) => {
  const rowsCalc = Object.keys(row).map((i) => (
    <Cell key={i} value={row[i]} columnIndex={i} handleClick={handleClick} />
  ));
  return (
    <div className="Row">
      {rowsCalc}
    </div>
  )
}

export default Row;
