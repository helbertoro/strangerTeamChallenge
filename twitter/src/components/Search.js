import React from 'react';
import './styles/Search.scss';

function Search({onclick}){
    return (
        <div className = "search">
            <input placeholder="Buscar"/>
            <a onClick = {onclick}>Buscar</a>
        </div>
    );
}

export default Search;