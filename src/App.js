import React from "react";
import "./App.css";
import About from "./pages/About";
// import Title from "./component/Title";
import  Home from "./pages/Home"
// import Counter from "./component/Counter"
function App() {
  const [page, setPage] = React.useState("Home");

  const handleChange = () => {
    if (page === "Home") {
      setPage("About");
    } else {
      setPage("Home");
    }
  };
  return (
    <div className="container">
    {page === "Home" ? <Home/> : <About/>}
    <button onClick={handleChange}>Change Page</button>
      {/* <Counter /> */}

      {/* <Home />

      <Title title="react" name="jenis"/>
      <Title name="Manthan" title="express"/>
      <Title name="Sandip" title="node"/> */}
    </div>
  );
}

export default App;
