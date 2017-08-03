import React, { Component } from 'react';
//import './App.css';

import Routes from './Router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <hr /> 
        <Routes />
      </div>
    );
  }
}

export default App;

