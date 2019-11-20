import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render(){
    return (
      <div>
        <div className='title-box'>
          <h1 className='main-title' >Jay's Paw Pawtrol</h1>
          <h3 className='main-title-desc'>Dog Walk - Dog Daycare - Dog Drop-ins</h3>
          <div className='title-offer'>Limited Time Offer <br/>Sign up & Get First 3 Walks for $25!</div>
        </div>
      </div>
    );
  }
}

export default Header;
