import React, { Components } from "react";
import ReactDOM from 'react-dom';
import NavBar from './navBar.js';
import Results from './results.js';
import './searchResultsPage.css';


function SearchResultsPage(){
    return (
        <div className = "ResultsPage">
            <NavBar/>
            <Results/>
        </div>
    )
}

ReactDOM.render(
    <SearchResultsPage />,
    document.getElementById('root')
  );

export default SearchResultsPage;