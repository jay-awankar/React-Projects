import DiceRoller from "./components/diceRoller";
import "./App.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      <DiceRoller />
    </div>
  );
}

export default App;
