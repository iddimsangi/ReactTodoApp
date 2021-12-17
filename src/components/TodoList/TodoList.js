import React, { useEffect } from "react";
import "./TodoList.scss";
import TodoCard from "./TodoCard/TodoCard";

function TodoList(props) {
  // const myTodos = props.todos;
  // const deleteId = (Id) =>{
  //     props.deleteIdHandler(Id)
  // }
  // const updateTodoHandler = (id) =>{
  //     props.updatedTodoHandler(id)
  // }
  // const allTodos = () => {
  //   console.log(myTodos);
  // };
  useEffect(() => {
    console.log("updated");
  }, [props.todos]);
  //   const todoList = props.todos.map((todosArrayObj) => {
  //     return <TodoCard todosArrayObj={todosArrayObj} key={todosArrayObj.id} updateTodo={props.updatedTodoHandler}  onClicked = {props.deleteIdHandler} />;
  //   });
  return (
    <div className={props.theme ? "cardList" : "cardListDark"}>
     
      {props.todos.map((todosArrayObj) => {
        return (
          <TodoCard
            theme ={props.theme}
            todosArrayObj={todosArrayObj}
            key={todosArrayObj.ID}
            updateTodo={props.updatedTodoHandler}
            onClicked={props.deleteIdHandler}
          />
        );
      })}
      <div className="list-footer">
        <a href="#">{props.todos.length} itemlefts</a>
        <div>
          <a onClick={() => props.filtered("All")} href="#">
            All
          </a>
          <a onClick={() => props.filtered("Active")}  href="#">Active</a>
          <a onClick={() => props.filtered("Completed")} href="#">Completed</a>
        </div>
        <a onClick={() => props.filtered("Clear")} href="#">ClearCompleted</a>
      </div>
      <div className="last-div">
        <div>
          <a onClick={() => props.filtered("All")} href="#">All</a>
          <a onClick={() => props.filtered("Active")} href="#">Active</a>
          <a onClick={() => props.filtered("Completed")} href="#">Completed</a>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
