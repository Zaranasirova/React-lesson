import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((item) => (
        <TaskShow key={item.id} data={item}/>
      ))}
    </div>
  );
};

export default TaskList;
