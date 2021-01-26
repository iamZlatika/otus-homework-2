import React from "react";
import Game from "../src/Game/Game";

const App: React.FC = () => {
  return <>
  <h1 style={{textAlign: "center"}}>Game of Life Field Editor</h1>
  <Game height={10} width={10} />
  </>;
};

export default App;
