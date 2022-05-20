import React from "react";

function ToDo(props) {
  return (
    <div className="to-do">
      <h1>{props.task} </h1>
      <button className="rm-btn" onClick={() => props.deleteItem(props.id)}>
        Remove
      </button>
    </div>
  );
}

export default ToDo;
