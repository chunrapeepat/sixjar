import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  width: 100%;
  position: relative;
  display: block;
  font-family: sans-serif;
  margin-bottom: 30px;
`

const Heading = styled('div')`
  font-size: 20px;
  margin-bottom: 10px;
`

const Divider = styled('div')`
  position: absolute;
  width: 2px;
  height: 90px;
  background: black;
  z-index: 9;
  margin-top: -30px;
  margin-left: 50%;

  &:after {
    content: '30000$';
  }
`

const ProgressBar = styled('div')`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #ddd;
  height: 50px;

  ${this} > div {
    width: 37%;
    position: absolute;
    height: 50px;
    background: #64DD17;
  }
`

const DescriptionLabel = styled('div')`
  font-size: 18px;
  color: #777;
  margin-top: 10px;
`

export default (props) => (
  <Container>
    <Heading>Macbook Pro 2017</Heading>
    <Divider />
    <ProgressBar>
      <div></div>
    </ProgressBar>
    <DescriptionLabel>You have 1000$ in Play Account</DescriptionLabel>
  </Container>
)
