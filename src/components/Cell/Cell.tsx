import React from "react";
import "./Cell.css";

interface Props {
  filled?: boolean;
  onClick?: () => void;
}
const Cell: React.FC<Props> = ({ filled = false, onClick = undefined }) => {
  return <div onClick={onClick} className={`${filled ? "filled" : "empty"} cell`}></div>;
};

export default Cell;
