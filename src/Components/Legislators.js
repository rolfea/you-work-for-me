import React from 'react'
import {geolocated, geoPropTypes} from 'react-geolocated'
import { Grid, Row, Col } from 'react-bootstrap'
import Loader from './Loader'
import styled, { keyframes } from 'styled-components'

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
        <FadeWrapper>
          <Grid>
            <StyledRow>
              <Col xs={4}>{extractName(this.state.repArray[0])}</Col>
              <Col xs={4}>{extractName(this.state.repArray[1])}</Col>
              <Col xs={4}>{extractName(this.state.repArray[2])}</Col>
            </StyledRow>
            <StyledRow>
              <Col xs={4}>{extractPhone(this.state.repArray[0])}</Col>
              <Col xs={4}>{extractPhone(this.state.repArray[1])}</Col>
              <Col xs={4}>{extractPhone(this.state.repArray[2])}</Col>
            </StyledRow>
            <StyledRow>
              <Col xs={4}>{extractEmail(this.state.repArray[0])}</Col>
              <Col xs={4}>{extractEmail(this.state.repArray[1])}</Col>
              <Col xs={4}>{extractEmail(this.state.repArray[2])}</Col>
            </StyledRow>
          </Grid>
        </FadeWrapper>
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

function extractName(repObject) {
  const name = `${repObject.first_name} ${repObject.last_name}`
  return name
}

function extractPhone(repObject) {
  const phoneNumber = <a href={`tel:${repObject.phone}`}>{repObject.phone}</a>
  return phoneNumber
}

function extractEmail(repObject) {
  const emailLink = <a href={`mailto:${repObject.oc_email}`}>Email</a>
  return emailLink
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeWrapper = styled.section`
  animation: ${fadeIn} 1s;
`;

const StyledRow = styled(Row)`
  font-size: large;
`;
