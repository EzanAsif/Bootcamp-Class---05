import React, {useState} from "react";
import "./App.css";
import Parent from "./parent";
import CounterContext from "./CounterContext";

function App() {

  let count = useState(1)

  return (
    <CounterContext.Provider value = {count}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
