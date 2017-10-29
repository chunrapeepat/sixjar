import React, {Component} from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  width: 100%;
  height: 100vh;
  background: red;
`

export default class extends Component {
  render(){
    return (
      <Container>
        This is a nav
      </Container>
    )
  }
}
