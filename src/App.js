import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopNav from './components/TopNav';
import Home from './Home.js';
import Employment from './components/Employment';
import About from './components/About';


import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <TopNav/>
        </div>
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/employees' exact component={ Employment } />
          <Route path='/about' exact component={ About } />
        </Switch>
      </Router>
    );
  }
}

export default App;
