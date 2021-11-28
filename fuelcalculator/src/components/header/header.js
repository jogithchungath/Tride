import React from 'react';
import './header.css';
import logo from './logo.png';

export default () => {
  return (
    <div  className="Header">
      <h2><img src={logo} alt="Logo" width='270' height='280' align='left'  />
      </h2>
    </div>
  )
}