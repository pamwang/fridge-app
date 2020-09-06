import React, { Component } from "react";
import ReactDOM from "react-dom";
import './searchBar.css';
import './images/searchicon.png'
import { render } from "@testing-library/react";


function Searchbar() {
    return (
        <div className='searchBar'>
            <span className='searchfield' contentEditable="true"></span>
        </div>
    )
}

export default Searchbar;
