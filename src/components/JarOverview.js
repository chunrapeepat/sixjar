import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
  width: 100%;
`

const Budget = styled('div')`
  text-align: center;
  color: white;
  text-align: center;
  width: 200px;
  background: ${props => (props.color) ? props.color : 'black'};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 50px; padding: 30px 0;
  margin-right: 20px;
  margin-bottom: 20px;

  &:after {
    content: '$';
    font-size: 22px;
    font-weight: 200;
  }
`

const Description = styled('div')`
  flex: 1;

  ${this} > h1 {
    margin: 0;
    font-size: 30px;
    display: block;
    margin-bottom: 10px;
    font-family: sans-serif;
  }

  ${this} > span {
    color: #777;
    font-family: sans-serif;
    font-size: 18px;
  }
`

export default (props) => (
  <Container>
    <Budget color={props.color}>{props.amount}</Budget>
    <Description>
      <h1>{props.heading}</h1>
      <span>{props.description}</span>
    </Description>
  </Container>
)
