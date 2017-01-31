import React from 'react'
import {geolocated, geoPropTypes} from 'react-geolocated'

class Legislators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repArray: null};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords != null) {
      const lat = nextProps.coords.latitude;
      const long = nextProps.coords.longitude;
      fetch(
        `https://congress.api.sunlightfoundation.com/legislators/locate?latitude=${lat}&longitude=${long}`
      ).then((res) => res.json().then((res) =>
          this.setState({repArray: res.results})
        )
      )
    }
  }

  render () {    
    return this.state.repArray ?
      <div>
        <ul>
          <p>{extractContactInfo(this.state.repArray[0])}</p>
          <p>{extractContactInfo(this.state.repArray[1])}</p>
          <p>{extractContactInfo(this.state.repArray[2])}</p>
        </ul>
      </div>
      : <div>...Loading</div>
  }
}

Legislators.propTypes = {...Legislators.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Legislators);

function extractContactInfo(repObject) {
  const returnedString = `${repObject.first_name} ${repObject.last_name} ${repObject.phone}`
  return returnedString
}
