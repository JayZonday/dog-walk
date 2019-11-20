import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render(){
    return (
      <div>
        <div className='footer-link-line'>
          <div className='footer-link' id='linkedin'>LinkedIn</div>
          <div className='footer-link' id='twitter'>Twitter</div>
          <div className='footer-link' id='instagram'>Instagram</div>
          <div className='footer-link' id='register'>Register</div>
        </div>
      </div>
    );
  }
}

export default Footer;
