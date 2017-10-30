import React, {Component} from 'react'
import {connect} from 'react-redux'

import Overview from './overview'
import Transaction from './transaction'
import Budget from './budget'
import Setting from './setting'

import {
  OVERVIEW,
  TRANSACTION,
  BUDGET,
  SETTING,
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
    if (page === SETTING) {
      RenderComponent = Setting
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
