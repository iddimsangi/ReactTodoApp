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
  const [filteredTodo, setfilteredTodo] = useState([]);
  const [keyword, setkeyword] = useState("All");
  const[theme, settheme] = useState(true);
  const AddTodoHandler = (todo) => {
    setTodos([{ ID: uniqid(), ...todo }, ...todos]);
    setkeyword("All");
    // setfilteredTodo([...todo])
    // console.log("FILTERED TODO: "+ filteredTodo)
  };
  // let isBlackCopy = theme.isBlack
  const deleteIdHandler = (Id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.ID !== Id;
    });
    setTodos(deletedTodo);
  };
  const updateTodo = (updateID) => {
    const Todoupdate = todos.find((currTodo) => currTodo.ID === updateID);
    const todoIndex = todos.findIndex((currTodo) => currTodo.ID === updateID);
    setTodos(() => {
      let todosCopy = todos;
      todosCopy[todoIndex] = {
        ...Todoupdate,
        isActive: !Todoupdate.isActive,
      };
      return [...todosCopy];
    });
  };
  // const themeChanger = (false) =>{
    
  // }
  useEffect(() => {
    filtered(keyword);
  }, [todos, keyword]);
  const filtered = (keyword) => {
    if (keyword === "All") {
      setfilteredTodo(todos);
      setkeyword("All")
      return;
    }
    if (keyword === "Active") {
      setfilteredTodo(todos.filter((todo) => todo.isActive === true));
      setkeyword("Active")
      return;
    }
    if(keyword === "Completed"){
      setfilteredTodo(todos.filter(todo => todo.isActive === false))
      setkeyword("Completed")
      return;
    }
    if(keyword === "Clear"){
      setTodos(todos.filter(todo =>todo.isActive === true))
      setfilteredTodo(todos.filter(todo => todo.isActive !== false))
      setkeyword("All")
      return;
    }
  };

  useEffect(() => {
    const receivedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (receivedTodos) setTodos(receivedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log("here");
  }, [todos]);
  // console.log(todos);
  return (
    <div>
      <input type="checkbox" className="checkboxIn" id="logoToggle" />
      <div className="App">
        <div className="App-container">
          <div className="App-container--main">
            <div className="App-container--main-head">
              <h1>todo</h1>

              <label onClick = {() => settheme(!theme)} className="imgIcons"  htmlFor="logoToggle">
                <img src={sun} className="icon-sun" alt="sun-logo" />
                <img className="icon-moon" src={moon} alt="sun-logo" />
              </label>
            </div>
            <div className="App-container--main-body">
              <AddTodo AddTodoHandler={AddTodoHandler} theme ={theme} />
              <TodoList
                todos={filteredTodo}
                deleteIdHandler={deleteIdHandler}
                updatedTodoHandler={updateTodo}
                filtered={filtered}
                theme={theme}
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
