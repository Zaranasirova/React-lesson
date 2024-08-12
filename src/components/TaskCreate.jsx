import React, { useState } from "react";

const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const [taskDesc, setTaskDesc] = useState("");
  const taskDescHandleChange = (e) => {
    setTaskDesc(e.target.value);
  };
  console.log(title,taskDesc);
  return (
    <div className="task">
      <h3>Zəhmət olmasa task elave edin!</h3>
      <form className="task-form">
        <label>Başlıq</label>
        <input
          value={title}
          onChange={handleChange}
          className="task-input"
          type="text"
        />
        <label>Task yazın</label>
        <textarea
          value={taskDesc}
          onChange={taskDescHandleChange}
          className="task-input"
          rows={5}
        />
        <button className="task-button">Hazırla</button>
      </form>
    </div>
  );
};

export default TaskCreate;
