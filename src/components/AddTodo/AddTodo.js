import React, { useState } from "react";
import "./AddTodo.scss";
function AddTodo(props) {
  const [todo, setTodo] = useState({
    todoDetail: "",
    isActive: true,
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.todoDetail === "") return alert("This field is Mandatory!");
    props.AddTodoHandler(todo);
    setTodo({ ...todo, todoDetail: "" });
  };

  return (
    <div className="Add_todo">
      <form
        action=""
        className={props.theme ? "form" : "form-white"}
        onSubmit={addTodo}
      >
        <div className="circle-btn"></div>
        <input
          type="text"
          name="todoInput"
          placeholder="Create a new todo.."
          onChange={(e) => setTodo({ ...todo, todoDetail: e.target.value })}
          value={todo.todoDetail}
          required
        />
      </form>
    </div>
  );
}

export default AddTodo;
