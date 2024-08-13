import React, { useState } from "react";

import axios from "axios";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {
const [tasks,setTasks]=useState([]);

  const createTask = (title, taskDesc) => {
    const CreatedTasks=[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ];
    setTasks(CreatedTasks)
  };

  return (
    <div className="app">
      <TaskCreate onCreate={createTask} />
      <h1>Tasklar</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default App;
