import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("")
  const [savedStatus, setSavedStatus] = useState(false)
  const [checkedStatus, setCheckedStatus] = useState(false)
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/lists")
    .then((r) => r.json())
    .then((data) => setLists(data));
  }, []);

  const handleListAdd = (newList) => {
    setLists([...lists, newList])
  }

  const tasksArrays = lists.map((list) => list.tasks)
  const tasks = tasksArrays.flat(1)


  const handleTaskAdd = (newTask) => {
    lists.forEach((list) => {
      if (list.id === newTask.list_id) {
        list.tasks?.push(newTask)
      }
    })
    setLists([...lists])
  }

  const handleSaveTask = () => {
    setSavedStatus((savedStatus) => !savedStatus)
  }

  const handleCheckTask = () => {
    setCheckedStatus((checkedStatus) => !checkedStatus)
  }

  const handleDeleteTask = (deletedTask) => {
    console.log(deletedTask) 
    lists.forEach((list) => {
      if (list.id === deletedTask.list_id) {
        list.tasks?.pop(deletedTask)
      }
    })
    setLists([...lists])
  }

  return (
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <Content lists={lists} setLists={setLists} tasks={tasks} search={search} onAddList={handleListAdd} onAddTask={handleTaskAdd} onSaveTask={handleSaveTask} onCheckTask={handleCheckTask} onDeleteTask={handleDeleteTask} />
        <Footer />
      </Router>
  );
}

export default App;
