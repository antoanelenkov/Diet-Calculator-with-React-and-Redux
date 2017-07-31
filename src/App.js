import React, { Component } from 'react';
import './App.css';

import Routes from './Router';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="centered">Calories Calculator</h1>
        <hr />
        <Navigation />
        <hr />
        <Routes />
      </div>
    );
  }
}

export default App;
