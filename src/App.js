import React, { Component } from 'react';
import Description from './Components/Description';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1>You Work for Me</h1>
        <Description dist='16' state="WI"/>
        {/*
        Location Component (if no geolocation possible use this)
        */}
      </div>
    )
  }
}

export default App;
