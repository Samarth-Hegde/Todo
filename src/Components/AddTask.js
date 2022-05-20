import React from "react";

function AddTask(props) {
  return (
    <div className="add-task-container">
      <input
        type="text"
        name="todo"
        className="inp"
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick} className="btn">
        Add
      </button>
    </div>
  );
}

export default AddTask;
