import React, { Component } from 'react';
import './index.css';

class TopNav extends Component {
  render(){
    return (
      <div>
      <div className='navbar'>
        <button className='nav-btn'>Contact Jay</button>
        <button className='nav-btn'>Services</button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Store</button>
      </div>
      </div>
    );
  }
}

export default TopNav;
