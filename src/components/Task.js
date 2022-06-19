import React from "react";

function Task({ text, task, category, handleDeleteTask }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => { handleDeleteTask(text) } }>X</button>
    </div>
  );
}

export default Task;
