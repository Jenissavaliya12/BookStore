import React, { useContext } from "react";
import { counterContext } from "../App";

function Consumer1() {
  const counter = useContext(counterContext);
  return (
    <div>
      Consumer1 - {counter.countState}
      <button onClick={() => counter.countDispatch("increament")}>
        Increament
      </button>
      <button onClick={() => counter.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default Consumer1;
