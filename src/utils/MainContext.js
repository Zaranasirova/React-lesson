import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const getFormValue = (e) => {
    setTitle(e.target.value);
  };

  const textareaValue = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id ? { ...task, title, taskDesc } : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
    } else {
      const createdTasks = [
        ...tasks,
        {
          id: Math.round(Math.random() * 999999),
          title,
          taskDesc,
        },
      ];
      setTasks(createdTasks);
    }
    setTitle("");
    setTaskDesc("");
    setIsEditing(false);
  };

  const deleteTaskList = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setTaskDesc(task.taskDesc);
    setEditTask(task);
    setIsEditing(true);
  };

  const globalData = {
    title,
    taskDesc,
    getFormValue,
    textareaValue,
    handleTaskSubmit,
    tasks,
    deleteTaskList,
    startEdit,
    isEditing,
    editTask,
  };

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
