import React, { createContext, useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
  let counterValue = useContext(CounterContext);
  console.log(counterValue);

  return (
    <div className="child">
      This is 1st child
      <h4>Counter value is : {counterValue[0]} </h4>
      <button onClick = {() => counterValue[1](++counterValue[0])}
      >

          INCREAMENT
      </button>
    </div>
  );
};

export default Child;


// iske andar counterCOntext mien jakr count ki poori value save horhi ha aur phr use contextmien CounterContex se value utha k hum apne code mien use kr rhe hn