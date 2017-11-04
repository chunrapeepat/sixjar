import React from 'react'
import Ink from 'react-ink'
import styled from 'react-emotion'

const Button = styled('button')`
  padding: 15px 25px;
  position: relative;
  color: white;
  border: 0;
  border-radius: 5px;
  outline: none;
  font-family: sans-serif;
  margin-top: 20px;
  font-size: 18px;
  background: ${props => props.bgcolor};
`

export default (props) => (
  <Button bgcolor={props.bgcolor}>
    {props.children}
    <Ink />
  </Button>
)
