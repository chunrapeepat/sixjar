import React, {Component} from 'react'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'

class Setting extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="SETTING"
          description="Setting sixjar" />
        Setting Page
      </div>
    )
  }
}

export default App(Setting)
