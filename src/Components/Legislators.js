import React from 'react'
import {geolocated, geoPropTypes} from 'react-geolocated'
import { Grid, Row, Col } from 'react-bootstrap'
import Loader from './Loader'
import styled from 'styled-components'

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
        <Grid>
          <StyledRow>
            <Col xs={4}>{extractContactInfo(this.state.repArray[0])}</Col>
            {console.log(this.state.repArray[0])}
            <Col xs={4}>{extractContactInfo(this.state.repArray[1])}</Col>
            <Col xs={4}>{extractContactInfo(this.state.repArray[2])}</Col>
          </StyledRow>
          <StyledRow>
            <Col xs={4}>Phone Number</Col>
            <Col xs={4}>Phone Number</Col>
            <Col xs={4}>Phone Number</Col>
          </StyledRow>
          <StyledRow>
            <Col xs={4}>Email</Col>
            <Col xs={4}>Email</Col>
            <Col xs={4}>Email</Col>
          </StyledRow>
        </Grid>
      </div>
      : <Loader />
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

const StyledRow = styled(Grid)`
  transition: opacity 1s ease-in-out;
`;
