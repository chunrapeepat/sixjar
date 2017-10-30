import React from 'react'
import styled from 'react-emotion'

const MarginContainer = styled('div')`
  padding-bottom: 67px;
`

const Container = styled('div')`
  width: 100%;
  font-family: sans-serif;
  margin-left: 0px;
  border-bottom: 1px solid #ccc;
  color: #999;
  position: fixed;
  background: white;
  z-index: 9999;

  ${this} > div {
    padding: 21px;
  }

  ${this} > div > span {
    font-weight: 200;
    font-size: 22px;
    color: black;
    margin-right: 7px;
  }
`

export default (props) => (
  <MarginContainer>
    <Container>
      <div>
        <span>{props.heading}</span> {props.description}
      </div>
    </Container>
  </MarginContainer>
)
