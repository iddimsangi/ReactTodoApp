import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg"
import "./App.scss";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <input type="checkbox" className="checkboxIn" id="logoToggle"/>
      <div className="App-container">
        <div className="App-container--main">
          <div className="App-container--main-head">
            <h1>todo</h1>
        
            <label htmlFor="logoToggle">
            <img src={sun} alt="sun-logo" />
            <img className="icon-moon" src={moon} alt="sun-logo" />
            </label>
           
          </div>
          <div className="App-container--main-body">
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
      <footer>
        <p>Drag and drop to reoder list</p>
      </footer>
    </div>
  );
}

export default App;
