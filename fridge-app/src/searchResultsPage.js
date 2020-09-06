import React, { Components } from "react";
import ReactDOM from 'react-dom';
import Searchbar from './searchBar.js';
import NavBar from './navBar.js';
import './searchResultsPage.css';

function SearchResultsPage(){
    return (
        <div className = "ResultsPage">
            <NavBar/>
        </div>
    )
}

export default SearchResultsPage;