import React from 'react'
import styled from 'styled-components'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <StyledFooter>
        <a href="https://www.netlify.com">
<img style={{opacity: 1, borderStyle: "hidden"}} src="https://www.netlify.com/img/global/badges/netlify-light.svg" />
</a>
        </StyledFooter>
      </div>
    )
  }
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: white;
`;
