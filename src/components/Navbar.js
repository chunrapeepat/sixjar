import React, {Component} from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'

const Container = styled('div')`
  width: 100%;
  height: 100vh;
  background: #fcfcfc;
  border: 1px solid #ccc;
`

const Padding = styled('div')`
  padding: 15px;
`

const HeroIcon = styled('h1')`
  margin: 0;
  font-family: sans-serif;
`

const MenuLinkItem = styled('div')`
  width: calc(100% - 30px);
  font-family: sans-serif;
  cursor: pointer;
  padding: 15px;
  position: relative;
  background: ${props => (props.active) ? '#f0f0f0' : '#fefefe'};
`

export default class extends Component {
  render(){
    return (
      <Container>
        <Padding>
          <HeroIcon>SIXJAR</HeroIcon>
        </Padding>
        <MenuLinkItem active>
          Overview
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem>
          Transaction
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem>
          Budget
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem>
          Setting
          <Ink />
        </MenuLinkItem>
      </Container>
    )
  }
}
