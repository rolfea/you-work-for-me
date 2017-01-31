import React, { Component } from 'react';
import Description from './Components/Description';
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'

class App extends Component {
  render() {
    return(
      <div>
      <CenteringWrapper>
          <StyledJumbotron>
            <h4>Call your legislators and tell them...</h4>
            <h1>You Work for Me</h1>
          </StyledJumbotron>
        <Description />
      </CenteringWrapper>

      {/*
      Location Component (if no geolocation possible use this)
      */}
      </div>
    )
  }
}

const CenteringWrapper = styled.section`
  text-align: center;
`;

const StyledJumbotron = styled(Jumbotron)`
  background-color: #d8ddf9;
`;

export default App;
