import React, { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../utils/MainContext";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ data }) => {

  const { deleteTaskList, startEdit, isEditing, editTask } = useContext(MainContext);

  const handleDelete = () => {
    deleteTaskList(data.id);
  };

  const handleEdit = () => {
    startEdit(data);
  };






  return (
    <div className="task-show">
    {isEditing && editTask?.id === data.id ?(
        <TaskCreate
          head={"Zəhmət olmasa taskı yeniləyin!"}
          text={"taskı düzənləyin!"}
          buttonText={"yeniliyi saxlayin"}
          headName={"Başlığı düzənləyin!"}
          taskFormUpdate={true}
        />
      ) : (
        <div>
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
