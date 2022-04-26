// import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Create components and start my app 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
