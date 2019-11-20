import React, { Component } from 'react';
import './index.css';

class MainBody extends Component {
  render(){
    return (
      <div>
        <div className='main-service-schedule'>
          <h3 className='title' id='schedule-title'>Schedule with Paw Patrol Today!</h3>
          <button className='service-btn' id='walk'>Schedule a Walk</button>
          <button className='service-btn' id='dropin'>Schedule a Drop-in</button>
        </div>
        <div className='main-media-box'>
          <h3 className='title' id='media-title'>Meet The Puppy Pawtrol</h3>
          <div className='media' id='photos'>Photos</div>
          <div className='media' id='videos'>Videos</div>
        </div>
        <div className='main-reviews-box'>
          Recent Reviews
        </div>

      </div>
    );
  }
}

export default MainBody;
