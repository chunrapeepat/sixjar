import React, {Component} from 'react'
import styled from 'react-emotion'
import {keyframes} from 'emotion'

import App from '../components/App'
import {Padding} from '../core/helper'
import PageNavigator from '../components/PageNavigator'
import TransactionCard from '../components/TransactionCard'
import NewTransactionButton from '../components/NewTransactionButton'

const backdropAnimateOpen = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const backdropAnimateClose = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const TransactionPanel = styled('div')`
  position: fixed;
  z-index: 999999;
  width: 100%;
  height: 400px;
  background: white;
  transition: ${props => (props.display) ? '0.5s' : '0.2s'};
  bottom: ${props => (props.display) ? '0' : '-400px'};
`

const Backdrop = styled('div')`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 99999;
  cursor: pointer;
  transition: ${props => (props.display) ? '0.00001s' : ''};
  bottom: ${props => (props.display) ? '0' : '-100vh'};
  animation: ${props => (props.display) ? `${backdropAnimateOpen} 0.5s ease 1` : `${backdropAnimateClose} 0.5s ease 1`};
`

class Transaction extends Component {

  constructor() {
    super()
    this.state = {
      panelOpen: false,
    }
  }

  openNewTransaction() {
    this.setState({
      panelOpen: true,
    })
  }

  closeNewTransaction() {
    this.setState({
      panelOpen: false,
    })
  }

  render() {
    return (
      <div>
        <NewTransactionButton
          function={() => this.openNewTransaction()}/>
        <Backdrop
          display={this.state.panelOpen}
          onClick={() => this.closeNewTransaction()}/>
        <PageNavigator
          heading="TRANSACTION"
          description="Manage your income & outcome transaction" />
        <TransactionPanel display={this.state.panelOpen}>

        </TransactionPanel>
        <Padding>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Padding>
      </div>
    )
  }
}

export default App(Transaction)
