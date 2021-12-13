import React from "react";
import "./TodoList.scss";
import TodoCard from "./TodoCard/TodoCard";
function TodoList(props) {
    const deleteId = (Id) =>{
        props.deleteIdHandler(Id)
    }
  const todoList = props.todosArray.map((todosArrayObj) => {
    return <TodoCard todosArrayObj={todosArrayObj} key={todosArrayObj.id} onClicked = {deleteId} />;
  });
  return (
    <div className="cardList">
      {todoList}
      <div className="list-footer">
        <a href="#">3itemlefts</a>
        <div>
          <a href="#">All</a>
          <a href="#">Active</a>
          <a href="#">Completed</a>
        </div>
        <a href="#">ClearCompleted</a>
      </div>
      <div className="last-div">
        <div>
          <a href="#">All</a>
          <a href="#">Active</a>
          <a href="#">Completed</a>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
