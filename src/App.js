import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <Router>
        <NavBar />
        <Content />
      </Router>
  );
}

export default App;
