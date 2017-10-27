'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render (
  <Router>
    <Main />
  </Router>,
  document.getElementById('main')
)
