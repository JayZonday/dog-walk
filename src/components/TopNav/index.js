import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import WhitePaws from './whitepaw.png'
import './index.css';


class TopNav extends Component {

  handleAbout = () => {
    if(document.querySelector('.drop-down#about').style.display === 'block'){
      document.querySelector('.drop-down#about').style.display = 'none'
    }else{
      document.querySelector('.drop-down#about').style.display = 'block'
    }
  }
  handleServices = () => {
    if(document.querySelector('.drop-down#services').style.display === 'block'){
      document.querySelector('.drop-down#services').style.display = 'none'
    }else{
      document.querySelector('.drop-down#services').style.display = 'block'
    }
  }
  handleContact = () => {
    if(document.querySelector('.drop-down#contact').style.display === 'block'){
      document.querySelector('.drop-down#contact').style.display = 'none'
    }else{
      document.querySelector('.drop-down#contact').style.display = 'block'
    }
  }

  render(){
    return (
      <div>
        <div className='navbar'>
          <NavLink to='/'><button className='nav-btn'>Home</button></NavLink>
          <button className='nav-btn' onClick={() => this.handleContact()}>Contact</button>
          <button className='nav-btn' onClick={() => this.handleServices()}>Services</button>
          <button className='nav-btn' onClick={() => this.handleAbout()}>About</button>
          <button className='nav-btn'>Store</button>
        </div>
        <div className='drop-down' id='contact'>
          <div className='drop-item'>Email Me</div>
          <div className='drop-item'>Call Me</div>
        </div>
        <div className='drop-down' id='services'>
          <div className='drop-item'>Dog Walk</div>
          <div className='drop-item'>Dog Drop-In</div>
          <div className='drop-item'>Overnight Stay</div>
        </div>
        <div className='drop-down' id='about'>
          <NavLink to='/about'><div className='drop-item'>About</div></NavLink>
          <NavLink to='/employees'><div className='drop-item'>Employees</div></NavLink>
        </div>

      </div>
    );
  }
}

export default TopNav;
