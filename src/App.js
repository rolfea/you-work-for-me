import React, { Component } from 'react';
import Description from './Components/Description';
import { Jumbotron } from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Jumbotron>
          <h4>Call your legislator and tell them...</h4>
          <h1>You Work for Me</h1>
        </Jumbotron>
        <Description />
        {/*
        Location Component (if no geolocation possible use this)
        */}
      </div>
    )
  }
}

export default App;
