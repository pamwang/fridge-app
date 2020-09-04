//import React from 'react';
import React, { Components } from "react";
import ReactDOM from 'react-dom';
import Searchbar from './searchBar.js';
import Title from './title.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Searchbar />
      </header>
    </div >
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

