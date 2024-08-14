import React from "react";
import { useContext } from "react";
import { MainContext } from "../utils/MainContext";

const TaskCreate = ({head,text,buttonText,headName}) => {
  const { title, taskDesc, getFormValue, textareaValue, handleTaskSubmit } =
    useContext(MainContext);

  return (
    <div className="task">
      <h3>{head}</h3>
      <form className="task-form">
        <label>{headName}</label>
        <input
          value={title}
          onChange={getFormValue}
          className="task-input"
          type="text"
        />
        <label>{text}</label>
        <textarea
          value={taskDesc}
          onChange={textareaValue}
          className="task-input"
          rows={5}
        />
        <button className="task-button" onClick={handleTaskSubmit}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
