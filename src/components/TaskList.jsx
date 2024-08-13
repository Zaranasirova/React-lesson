import React from "react";
import TaskShow from "./TaskShow";
import { useContext } from "react";
import { MainContext } from "../utils/MainContext";
const TaskList = () => {
  const { tasks } = useContext(MainContext);
  return (
    <div className="task-list">
      {tasks.map(item => (
        <TaskShow key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TaskList;
