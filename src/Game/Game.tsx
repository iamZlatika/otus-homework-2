import React, { useState } from "react";
import Field from "../components/Field/Field";

export const createEmptyField = (height: number, width: number): boolean[][] => {
  const field = [];
  for (let i = 0; i < height; i++) {
    field.push(new Array(width).fill(false));
  }
  return field;
};

interface Props {
  height: number;
  width: number;
}
const Game: React.FC<Props> = ({ height, width }) => {
  const [field, setField] = useState(createEmptyField(height, width));

  const toggle = (x: number, y: number) => {
    const newField = [...field];
    newField[y][x] = !field[y][x];
    setField(newField);
  };

  return <Field field={field} onClick={toggle} />;
};

export default Game;
