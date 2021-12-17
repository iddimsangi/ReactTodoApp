import React, { useState, useEffect } from "react";
import "./AddTodo.scss";
function AddTodo(props) {
  const[todo, setTodo]  = useState({
    todoDetail: "",
    isActive: true,
  });
//   const themeHandler = props.theme.map(curr =>{
// return curr
//   })
  // const[theme, settheme] = useState({
  //  isBlack: true
  // });

  // const themeChanger = (isBlack) =>{
  //   props.settheme(isBlack)
  // }
  // useEffect(() =>{
  //   themeChanger()
  // }, [theme])
  const addTodo = (e) => {
    e.preventDefault();
    if(todo.todoDetail === "") return alert("This field is Mandatory!") 
    // console.log(todo)
    props.AddTodoHandler(todo);
    // props.themeChanger(setisblackTheme)
    setTodo({...todo, todoDetail: "" });
  };
//   console.log(todo)

  return (
    <div className="Add_todo">
      {/* <input type="checkbox" className="checkboxIn" id="toggletodo"/> */}
      <form action="" className={ props.theme ? "form" : "form-white"} onSubmit={addTodo} >
        {/* <input type="radio"/> */}
        <div className="circle-btn" ></div>
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
