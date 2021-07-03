import React from 'react';
import './styles/Main.scss';

function Main({ children }){
    return (
        <div className="main">
          { children }
        </div>
    );
}

export default Main;