import React, {Component} from 'react'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'

class Budget extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="BUDGET"
          description="Saving your budget to buy what you want" />
        Budget Page
      </div>
    )
  }
}

export default App(Budget)
