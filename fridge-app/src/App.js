import React, { Components } from "react";
import ReactDOM from 'react-dom';
import Searchbar from './searchBar.js';
import SearchbarInput from './searchBar-input.js';
import Title from './title.js';
import './App.css';

import SearchResultsPage from './searchResultsPage.js';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <SearchbarInput />
      </header>
    </div >
  );

}

function App() {
  return (
    <SearchResultsPage />
  )
}

ReactDOM.render(
  <App1 />,
  document.getElementById('root')
);

export default App1;

