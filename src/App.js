import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://ec2-52-79-254-239.ap-northeast-2.compute.amazonaws.com:9090/test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React WoW
        </a>
      </header>
    </div>
  );
}

export default App;
