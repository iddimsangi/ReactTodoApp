import React from "react";
import checkmark from "../../../images/icon-check.svg";
import crossmark from "../../../images/icon-cross.svg";
import "./TodoCard.scss";
function TodoCard(props) {
  const { ID, todoDetail, isActive } = props.todosArrayObj;
  return (
    <div className="todo_card">
      <div className="container">
        <span className="circle">
          <img src={checkmark} alt="checkmark icon" />
        </span>
        <p>{todoDetail}</p>
      </div>

      <img
        src={crossmark}
        className="cross-icon"
        alt="crossmark"
        onClick={() => props.onClicked(ID)}
      />
    </div>
  );
}

export default TodoCard;
