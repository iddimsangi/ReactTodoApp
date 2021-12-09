import sun from '../images/icon-sun.svg'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div>
          <h1>todo</h1>
          <img src={sun} alt="sun-logo"/>
        </div>
      </div>
      <footer>
        <p>Drag and drop to reoder list</p>
      </footer>
    </div>
  );
}

export default App;
