import { useState } from 'react'
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg"
import "./App.scss";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
function App() {
  const[todos, setTodos] = useState([]);
  const AddTodoHandler = (todo) =>{
    setTodos([
      {ID: new Date(), ...todo},
      ...todos
    ])
  }
  console.log(todos)
  return (
<div>
<input type="checkbox" className="checkboxIn" id="logoToggle"/>
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
            <TodoList />
          </div>
        </div>
      </div>
      <footer>
        <p>Drag and drop to reoder list</p>
      </footer>
    </div>
</div>
  );
}

export default App;
