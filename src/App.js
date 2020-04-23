import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
        <Container />
      </div>
    </div>
  );
}
export default App;
