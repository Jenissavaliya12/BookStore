import React, { useContext } from "react";
import { counterContext } from "../App";

function Consumer2() {
  const counter = useContext(counterContext);
  return (
    <div >
      Consumer2 - {counter.countState}
      <button onClick={() => counter.countDispatch("increament")}>
        Increament
      </button>
      <button onClick={() => counter.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default Consumer2;
