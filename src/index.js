import React from 'react'
import ReactDOM from 'react-dom'
// import redux pageages
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {pageReducer} from './core/reducers'
import Index from './routes/routes'

// create redux store
const store = createStore(combineReducers({
  page: pageReducer
}))

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>
, document.getElementById('root'))
