import React from "react";
import "./Field.css";
import Cell from "../Cell/Cell";

interface Props {
  field: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Field: React.FC<Props> = ({ field, onClick }) => {
  const cellRow = (row, y) =>
    row.map((filled, x) => (
      <Cell
        filled={filled}
        key={`${x},${y}`}
        onClick={() => {
          onClick(x, y);
        }}
      />
    ));

  return (
    <div className="field">
      {field.map((row, y) => (
        <div key={`${y}`} className="row">
          {cellRow(row, y)}
        </div>
      ))}
    </div>
  );
};

export default Field;
