import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Goview from './Goview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h2>Welcome to React Goview !!!</h2>
        </div>
        <div>
          <Goview/>
        </div>
      </div>
    );
  }
}

export default App;
