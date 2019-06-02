import React from 'react';

const Cell = ({handleClick, columnIndex, value}) => {
  let slot = "empty";

  if (value === 1) {
    slot = "playOne";
  } else if (value === 2) {
    slot = "playTwo";
  }

  return (
    <div className="Cell" onClick={() => handleClick(columnIndex)}>
      <div className={[slot, "circle"].join(" ")}></div>
    </div>
  )

}

export default Cell;
