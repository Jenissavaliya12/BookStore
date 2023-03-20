import React, { useReducer } from "react";
import "./App.css";
import Consumer2 from "./component/Consumer2";
import Consumer1 from "./component/Consumer1";

export const counterContext = React.createContext();

const inititalValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "reset":
      return inititalValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, inititalValue);

  return (
    <counterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="text-center">
        Count - {count}
        <Consumer1 />
        <Consumer2 />
      </div>
    </counterContext.Provider>
  );
}

export default App;
