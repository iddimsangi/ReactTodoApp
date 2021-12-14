import React, { useEffect } from "react";
import "./TodoList.scss";
import TodoCard from "./TodoCard/TodoCard";
function TodoList(props) {
  const myTodos = props.todos;
  // const deleteId = (Id) =>{
  //     props.deleteIdHandler(Id)
  // }
  // const updateTodoHandler = (id) =>{
  //     props.updatedTodoHandler(id)
  // }
  const allTodos = () => {
    console.log(myTodos);
  };
  useEffect(() => {
    console.log("updated");
  }, [props.todos]);
  console.log(props.todos);
  //   const todoList = props.todos.map((todosArrayObj) => {
  //     return <TodoCard todosArrayObj={todosArrayObj} key={todosArrayObj.id} updateTodo={props.updatedTodoHandler}  onClicked = {props.deleteIdHandler} />;
  //   });
  return (
    <div className="cardList">
      {props.todos.map((todosArrayObj) => {
        return (
          <TodoCard
            todosArrayObj={todosArrayObj}
            key={todosArrayObj.id}
            updateTodo={props.updatedTodoHandler}
            onClicked={props.deleteIdHandler}
          />
        );
      })}
      <div className="list-footer">
        <a href="#">3itemlefts</a>
        <div>
          <a onClick={allTodos} href="#">
            All
          </a>
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
