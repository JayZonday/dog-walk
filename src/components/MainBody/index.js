import React, { Component } from 'react';
import './index.css';

class MainBody extends Component {
  render(){
    return (
      <div>
        <div className='main-service-schedule'>
          <h3 className='title' id='schedule-title'>Schedule with Paw Pawtrol Today!</h3>
          <button className='service-btn' id='walk'>Schedule a Walk</button>
          <button className='service-btn' id='dropin'>Schedule a Drop-in</button>
          <button className='service-btn' id='overnight'>Book an Overnight Stay</button>
        </div>

        <div className='main-media-box'>
          <h3 className='title' id='media-title'>Meet The Puppy Pawtrol</h3>
          <div className='media' id='photos'>Photos</div>
          <div className='media' id='videos'>Videos</div>
        </div>
        <div className='main-reviews-box'>
          <div className='review'>Recent Reviews</div>
          <div className='review'>Recent Reviews</div>
          <div className='review'>Recent Reviews</div>
        </div>

      </div>
    );
  }
}

export default MainBody;
