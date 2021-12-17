import React, { useEffect, useState } from "react";
import checkmark from "../../../images/icon-check.svg";
import crossmark from "../../../images/icon-cross.svg";
import "./TodoCard.scss";
function TodoCard(props) {
  const { ID, todoDetail, isActive } = props.todosArrayObj;

  const [isClicked, setisClicked] = useState(false);
  const toggleClass = (ID) => {
    setisClicked(!isClicked);
    props.updateTodo(ID)
  };
  return (
    <div className={props.theme ? "todo_card" : "todo_card_theme"}>
      {/* <input type="checkbox" className="togglecircle" id="togglecircle" /> */}
      <div className="container">
        <span
          onClick={() => toggleClass(ID)}
          className={!isActive ? "Active" : "circle"}
        >
          <img src={checkmark} alt="checkmark icon" />
        </span>
        <p className={!isActive ?  "lineText" : "normal"}>{todoDetail}</p>
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
