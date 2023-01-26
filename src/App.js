import React from "react";
import CardList from "./CardList";
import { robots } from "./robots.js";
import Searchbox from "./Searchbox";

const App = () => {
  return (
    <>
      <h1>Robo Market</h1>
      <Searchbox />
      <CardList robots={robots} />
    </>
  );
};

export default App;
