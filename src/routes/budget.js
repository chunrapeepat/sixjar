import React, {Component} from 'react'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'
import {Padding} from '../core/helper'
import BudgetCard from '../components/BudgetCard'

class Budget extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="BUDGET"
          description="Saving your budget to buy what you want" />
        <Padding>
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
        </Padding>
      </div>
    )
  }
}

export default App(Budget)
