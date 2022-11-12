import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("")
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/lists")
    .then((r) => r.json())
    .then((data) => setLists(data));
  }, []);

  const handleListAdd = (newList) => {
    setLists([...lists, newList])
  }

  const handleTaskAdd = (newTask) => {
    lists.forEach((list) => {
      if (list.id === newTask.list_id) {
        list.tasks?.push(newTask)
      }
    })
    setLists([...lists])
  }

  return (
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <Content lists={lists} setLists={setLists} search={search} onAddList={handleListAdd} onAddTask={handleTaskAdd} />
      </Router>
  );
}

export default App;
