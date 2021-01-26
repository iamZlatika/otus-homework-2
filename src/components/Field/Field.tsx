import React from "react";
import "./Field.css";
import Cell from "../Cell/Cell";

interface Props {
  field: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Field: React.FC<Props> = ({ field, onClick }) => {
  const rows = [];
  for (let y = 0; y < field.length; y++) {
    const row = [];
    for (let x = 0; x < field[y].length; x++) {
      row.push(
        <Cell
          filled={field[y][x]}
          key={`${x},${y}`}
          onClick={() => {
            onClick(x, y);
          }}
        />
      );
    }
    rows.push(
      <div key={`${y}`} className="row">
        {row}
      </div>
    );
  }

  return <div className="field">{rows}</div>;
};

export default Field;
