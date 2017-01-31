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
/* List Component with district and state props passed in
<List dist={this.props.dist} state={this.props.state} /> */
