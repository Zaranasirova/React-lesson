import React from "react";
import { useContext } from "react";
import { MainContext } from "../utils/MainContext";

const TaskCreate = () => {
  const { title,taskDesc ,getFormValue,textareaValue,handleTaskSubmit } = useContext(MainContext);


  return (
    <div className="task">
      <h3>Zəhmət olmasa task elave edin!</h3>
      <form className="task-form" >
        <label>Başlıq</label>
        <input value={title} onChange={getFormValue} className="task-input" type="text" />
        <label>Task yazın</label>
        <textarea value={taskDesc} onChange={textareaValue} className="task-input" rows={5} />
        <button className="task-button" onClick={handleTaskSubmit} >Hazırla</button>
      </form>
    </div>
  );
};

export default TaskCreate;
