import React from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import GlobalContext from "./utils/MainContext";

const App = () => {
  return (
    <GlobalContext>
      <div className="app">
      <TaskCreate head={"Zəhmət olmasa task əlavə edin!"} text={"text elave edin!"} buttonText={"Göndər"} headName={"Başlıq"}/>
      <h1>Tasklar</h1>
      <TaskList />
      </div>
    </GlobalContext>
  );
};

export default App;
