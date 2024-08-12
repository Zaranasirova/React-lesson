import React, { useState } from "react";

import axios from "axios";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {

  

  return (
  <div className="app">
    <TaskCreate/>
    <h1>Tasklar</h1>
    <TaskList/>
  </div>
  );
};

export default App;
