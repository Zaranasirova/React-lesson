import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  const getFormValue = (e) => {
    setTitle(e.target.value);
  };
  const textareaValue = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
    setTitle("");
    setTaskDesc("");
  };

  const deleteTaskList=(id)=>{
  const filteredTasks=tasks.filter(item=>item.id !==id);
  setTasks(filteredTasks);
  }
 

  const globalData = {
    title,
    taskDesc,
    getFormValue,
    textareaValue,
    handleTaskSubmit,
    tasks,
    deleteTaskList
  };

 

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
