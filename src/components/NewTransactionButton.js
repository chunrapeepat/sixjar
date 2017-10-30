import React from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'

const FloatButtonContainer = styled('div')`
  position: fixed;
  bottom: 21px;
  right: 21px;
  color: white;
  font-size: 40px;
  border-radius: 50%;
  font-weight: 200;
  background: #3D5AFE;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 999;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background: #566CFE;
  }

  ${this} > span {
    display: block;
    padding-top: 7px;
    padding-left: 19px;
  }
`

export default (props) => (
  <div onClick={() => props.function()}>
    <FloatButtonContainer>
      <Ink/>
      <span>+</span>
    </FloatButtonContainer>
  </div>
)
