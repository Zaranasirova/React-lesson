import React from "react";
import TaskCreate from "../components/TaskCreate";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  return (
    <div className="app">
      <TaskCreate
        head={"Zəhmət olmasa task əlavə edin!"}
        text={"text elave edin!"}
        buttonText={"Göndər"}
        headName={"Başlıq"}
      />
      <h1>Tasklar</h1>
      <TaskList />
    </div>
  );
};

export default TaskPage;
