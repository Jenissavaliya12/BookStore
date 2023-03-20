import React from "react";
import "./App.css";
// import HookMouse from "./component/HookMouse";
// import PostDetail from "./component/PostDetail";
// import Consumer2 from "./component/Consumer2";
// import CounterHook from "./component/CounterHook";
// import LogInForm from "./component/LogInForm";
// import Users from "./component/Users";
import Todo from "./component/Todo";

export const UserContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div>
      <Todo />
    {/* <CounterHook/> */}
      {/* <UserContext.Provider value={"Jenis"}>
        <channelContext.Provider value={"Sankalp"}>
          <Consumer2 />
        </channelContext.Provider>
      </UserContext.Provider> */}
      {/* <PostDetail /> */}
      {/* <HookMouse /> */}
      {/* <Users /> */}
      {/* <LogInForm /> */}
    </div>
  );
}

export default App;
