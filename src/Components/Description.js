import React from 'react';
import Legislators from './Legislators';
import styled from 'styled-components'

export default class Description extends React.Component {
  render () {
    return (
      <div>
        <DescriptionPadding>
          <h3>The Legislators for your district are: </h3>

        </DescriptionPadding>
        <Legislators />
      </div>
    )
  }
}

const DescriptionPadding = styled.section`
  padding-bottom: 20px;  
`;
