import { useState, useEffect } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import "./App.scss";
import AddTodo from "./AddTodo/AddTodo";
import uniqid from "uniqid";
import TodoList from "./TodoList/TodoList";
function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);
  const AddTodoHandler = (todo) => {
    setTodos([{ ID: uniqid(), ...todo }, ...todos]);
  };
  const deleteIdHandler = (Id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.ID !== Id;
    });
    setTodos(deletedTodo);
  };
  const updateTodo = (updateID) => {
    const Todoupdate = todos.find((currTodo) => currTodo.ID === updateID);
    const todoIndex = todos.findIndex((currTodo) => currTodo.ID === updateID);
    console.log(Todoupdate, todoIndex);
    setTodos(() => {
      let todosCopy = todos
      todosCopy[todoIndex] = {
        ...Todoupdate,
        isActive: !Todoupdate.isActive
      }
      return todosCopy
    })
  };
  useEffect(() => {
    const receivedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (receivedTodos) setTodos(receivedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  console.log(todos);
  return (
    <div>
      <input type="checkbox" className="checkboxIn" id="logoToggle" />
      <div className="App">
        <div className="App-container">
          <div className="App-container--main">
            <div className="App-container--main-head">
              <h1>todo</h1>

              <label className="imgIcons" htmlFor="logoToggle">
                <img src={sun} className="icon-sun" alt="sun-logo" />
                <img className="icon-moon" src={moon} alt="sun-logo" />
              </label>
            </div>
            <div className="App-container--main-body">
              <AddTodo AddTodoHandler={AddTodoHandler} />
              <TodoList
                todos={todos}
                deleteIdHandler={deleteIdHandler}
                updatedTodoHandler={updateTodo}
              />
            </div>
          </div>
        </div>
        <footer>
          <p>Drag and drop to reorder list</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
