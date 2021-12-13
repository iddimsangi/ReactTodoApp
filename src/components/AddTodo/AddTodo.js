import React, { useState } from "react";
import "./AddTodo.scss";
function AddTodo(props) {
  const[todo, setTodo]  = useState({
    todoDetail: "",
    isActive: true,
  });
  const addTodo = (e) => {
    e.preventDefault();
    if(todo.todoDetail === "") return alert("This field is Mandatory!") 
    // console.log(todo)
    props.AddTodoHandler(todo);
    setTodo({...todo, todoDetail: "" });
  };
//   console.log(todo)

  return (
    <div className="Add_todo">
      {/* <input type="checkbox" className="checkboxIn" id="toggletodo"/> */}
      <form action="" className="form" >
        {/* <input type="radio"/> */}
        <div className="circle-btn" onClick={addTodo}></div>
        <input
          type="text"
          name="todoInput"
          placeholder="Create a new todo.."
          onChange={(e) => setTodo({...todo, todoDetail: e.target.value })}
          value={todo.todoDetail}
          required
        />
      </form>
    </div>
  );
}

export default AddTodo;
