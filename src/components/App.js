import sun from "../images/icon-sun.svg";
import "./App.scss";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container--main">
          <div className="App-container--main-head">
            <h1>todo</h1>
            <img src={sun} alt="sun-logo" />
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
