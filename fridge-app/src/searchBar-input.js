import React, { Component } from "react";
import './searchBar-input.css';
import './images/searchicon.png'



function SearchbarInput() {
    return (
        <div className='searchBar'>
            <form onsubmit="redirect">
                <input className='searchfield' contentEditable="true"></input>
            </form>
        </div>
    )
}

export default SearchbarInput;
