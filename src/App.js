import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <NavBar />
      <Content />
    </Router>
  );
}

export default App;
