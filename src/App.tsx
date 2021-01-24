import React, { ReactElement } from "react";
import Cell from "../src/components/Cell/Cell";

const App = (): ReactElement => {
  return (
    <>
      <Cell filled />
      <Cell />
    </>
  );
};

export default App;
