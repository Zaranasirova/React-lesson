import React from "react";

const TaskShow = ({ data }) => {
  return (
    <div className="task-show">
      <h3 className="task-title">Sizin tapşırığınız</h3>
      <p>{data.title}</p>
      <h3 className="task-title">Ediləcək işlər</h3>
      <p>{data.taskDesc}</p>
      <div>
        <button className="delete btn">Sil</button>
        <button className="update btn">Yenilə</button>
      </div>
    </div>
  );
};

export default TaskShow;
