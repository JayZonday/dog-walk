import React, { Component } from 'react';

import Header from './components/Header';
import Introduction from './components/Introduction';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import './App.css';

class Home extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Introduction/>
        <MainBody/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
