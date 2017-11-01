import React, {Component} from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreator} from '../core/helper'
import {
  CHANGE_PAGE_ACTION,
  OVERVIEW,
  TRANSACTION,
  BUDGET,
  ABOUT,
} from '../core/constant'

const Container = styled('div')`
  width: 100%;
  height: 100vh;
  background: #fcfcfc;
  border-right: 1px solid #ccc;
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

class Navbar extends Component {
  render(){
    const {page, actionCreator} = this.props

    return (
      <Container>
        <Padding>
          <HeroIcon>SIXJAR</HeroIcon>
        </Padding>
        <MenuLinkItem
          active={page === OVERVIEW}
          onClick={() => actionCreator(CHANGE_PAGE_ACTION, OVERVIEW)}>
          Overview
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem
          active={page === TRANSACTION}
          onClick={() => actionCreator(CHANGE_PAGE_ACTION, TRANSACTION)}>
          Transaction
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem
          active={page === BUDGET}
          onClick={() => actionCreator(CHANGE_PAGE_ACTION, BUDGET)}>
          Budget
          <Ink />
        </MenuLinkItem>
        <MenuLinkItem
          active={page === ABOUT}
          onClick={() => actionCreator(CHANGE_PAGE_ACTION, ABOUT)}>
          About
          <Ink />
        </MenuLinkItem>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionCreator}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbar)
