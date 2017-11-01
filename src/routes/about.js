import React, {Component} from 'react'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'

class About extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="About"
          description="About this application and developer" />
        Setting Page
      </div>
    )
  }
}

export default App(About)
