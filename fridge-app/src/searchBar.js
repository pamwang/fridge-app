import React, { Component } from "react";
import './searchBar.css';
import './images/searchicon.png'



function Searchbar() {
    return (
        <div className='searchBar'>
            <form onsubmit="redirect">
                <span className='searchfield' contentEditable="true"></span>
            </form>
        </div>
    )
}

export default Searchbar;
