import logo from './logo.svg';
import './App.css';
import { Greeting } from "./components/greeting.js"

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Greeting name="Hattie" gender="f"></Greeting>
        <Greeting name="Clayton" gender="m"></Greeting>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Marisol
        </a>
      </header>
    </div>
    </>
  );
}



export default App;
