import React, { useState } from "react";
import Field from "../components/Field/Field";

export const createEmptyField = (height: number, width: number): boolean[][] => {
  return Array.from({ length: height }, () => new Array(width).fill(false));
};

interface Props {
  height: number;
  width: number;
}
const Game: React.FC<Props> = ({ height, width }) => {
  const [field, setField] = useState(createEmptyField(height, width));

  const toggle = (x: number, y: number) => {
    const newField = field.map((row, i) => (i === y ? [...row] : row));
    newField[y][x] = !field[y][x];
    setField(newField);
  };

  return <Field field={field} onClick={toggle} />;
};

export default Game;
