import React from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import GlobalContext from "./utils/MainContext";

const App = () => {
  return (
    <GlobalContext>
      <div className="app">
      <TaskCreate />
      <h1>Tasklar</h1>
      <TaskList />
      </div>
    </GlobalContext>
  );
};

export default App;
