import React, { Components } from "react";
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

export default SearchResultsPage;