import React, { Components } from "react";
import ReactDOM from 'react-dom';
import Searchbar from './searchBar.js';
import logo from './images/logo.png';
import './navBar.css';

function navBar() {
    return (
        <div className="navBar">
            <img src={logo} className="navBar-logo" alt="logo" />
            <div className="navBar-search">
                <Searchbar />
            </div>

        </div>
    )
}

export default navBar;