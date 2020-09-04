import React, { Component } from "react";
import ReactDOM from "react-dom";
import './searchBar.css';
import { render } from "@testing-library/react";


function Searchbar() {
    return (
        <div className = 'searchBar'>
            <input type="text" name="search" placeholder="Search..."></input>
        </div>
    )
}

export default Searchbar;