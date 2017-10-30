import React, {Component} from 'react'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'

class Transaction extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="TRANSACTION"
          description="Manage your income & outcome transaction" />
        Transaction Page
      </div>
    )
  }
}

export default App(Transaction)
