import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [lists, setLists] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/lists")
      .then((r) => r.json())
      .then((lists) => setLists(lists));
  }, []);

  return (
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <Content lists={lists} />
      </Router>
  );
}

export default App;
