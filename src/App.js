import React, { Component } from 'react';
import TopNav from './components/TopNav';
import Header from './components/Header';
import Introduction from './components/Introduction';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
      <TopNav/>
      <Header/>
      <Introduction/>
      <MainBody/>
      <Footer/>
      </div>
    );
  }
}

export default App;
