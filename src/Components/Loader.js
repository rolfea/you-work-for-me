import React from 'react'
import styled, { keyframes } from 'styled-components'

export default class Loader extends React.Component {
  render () {
    return (
      <Spinner />
    )
  }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: auto;  
  border: 16px solid #cc1414;
  border-top: 16px solid #3498db;
  border-bottom: 16px solid #f5f5f5;
  width: 100px;
  height: 100px;
  animation: ${rotate360} 4s linear infinite;
`;
