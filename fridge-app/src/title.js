import React, { Components } from "react";
import ReactDOM from 'react-dom';
import './title.css';
import logo from './images/logo.png';
import App from './App.js';

function Title() {
    return (
        <body>
            <a id='App-logo-link' href='./App.js'>
                <img src={logo} id="App-logo" alt="logo">
                </img>
            </a>
            <p>fridge-detective</p>
        </body>

    )
}

export default Title;