import React, {Component} from 'react'
import {connect} from 'react-redux'

import Overview from './overview'
import Transaction from './transaction'
import Budget from './budget'
import About from './about'

import {
  OVERVIEW,
  TRANSACTION,
  BUDGET,
  ABOUT,
} from '../core/constant'

class Routes extends Component {
  render() {
    let RenderComponent = null
    const {page} = this.props
    if (page === OVERVIEW) {
      RenderComponent = Overview
    }
    if (page === TRANSACTION) {
      RenderComponent = Transaction
    }
    if (page === BUDGET) {
      RenderComponent = Budget
    }
    if (page === ABOUT) {
      RenderComponent = About
    }
    return (
      <div>
        <RenderComponent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {page: state.page}
}

export default connect(mapStateToProps, null)(Routes)
