import React, { Components } from "react";
import ReactDOM from 'react-dom';
import './title.css';
import logo from './images/logo.png';
import App from './App.js';

function Title() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>fridge-detective</p>
        </div>

    )
}
  
export default Title;