import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [lists, setLists] = useState([])
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/lists")
    .then((r) => r.json())
    .then((data) => setLists(data));
  }, []);
  
  const handleTaskAdd = (newTask) => {
    setLists([...lists, newTask])
  }

  return (
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <Content lists={lists} search={search} onAddTask={handleTaskAdd}/>
      </Router>
  );
}

export default App;
