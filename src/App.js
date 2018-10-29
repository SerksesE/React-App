import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import UserBoard from './components/UserBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
          <UserBoard />
          <Title content="Look behind you!" />
          <LightSwitch />
        </header>
      </div>
    );
  }
}

export default App;
