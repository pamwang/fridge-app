import React from 'react';
import './App.css';
import logo from './logo.png';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

function helloworld(){
return(
  <div className = "App">
    <header className = "App-header">
    <img src={logo} className="App-logo" alt="logo" />
      <p>fridge-detective</p>
      <input type="text" name="search" placeholder="Search..."></input>
    </header>
  </div>
);
}

export default helloworld;

