import React from 'react';
import Legislators from './Legislators';

export default class Description extends React.Component {
  render () {
    return (
      <div>
        <h3>The Legislators for your district are: </h3>
        <Legislators />
      </div>
    )
  }
}
