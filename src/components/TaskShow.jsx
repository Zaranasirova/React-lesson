import React, { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../utils/MainContext";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ data }) => {
  const { deleteTaskList } = useContext(MainContext);
  const [editTask, setEdtTask] = useState(false);
  const handleDelete = () => {
    deleteTaskList(data.id);
  };

  const handleEdit = () => {
    setEdtTask(!editTask);
  };

  return (
    <div>
      {editTask ? (
        <TaskCreate head={"Zəhmət olmasa taskı yeniləyin!"} text={"taskı düzənləyin!"} buttonText={"yenilə"} headName={"Başlığı düzənləyin!"} />
      ) : (
        <div className="task-show">
          <h3 className="task-title">Sizin tapşırığınız</h3>
          <p>{data.title}</p>
          <h3 className="task-title">Ediləcək işlər</h3>
          <p>{data.taskDesc}</p>
          <div>
            <button className="delete btn" onClick={handleDelete}>
              Sil
            </button>
            <button className="update btn" onClick={handleEdit}>
              Yenilə
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
