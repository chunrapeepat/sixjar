import React from 'react'
import styled from 'react-emotion'
import {injectGlobal} from 'react-emotion'
import {lifecycle} from 'recompose'

import Navbar from './Navbar'

const Container = styled('div')`
  display: flex;

  ${this} > div:nth-child(1) {
    width: 230px;
  }

  ${this} > div:nth-child(2) {
    overflow-y: scroll;
    height: 100vh;
    flex: 1;
  }
`

const enhance = lifecycle({
  componentWillMount() {
    injectGlobal`
      body {
        margin: 0;
      }
    `
  }
})

const App = Component =>
  enhance(props => (
    <Container>
      <div>
        <Navbar />
      </div>
      <div>
        <Component {...props} />
      </div>
    </Container>
  ))

export default App
