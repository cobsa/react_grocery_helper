import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import Layout from './components/layout'
import rootReducer  from './reducers/rootReducer'

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)

var app = document.getElementById('app')
ReactDom.render(
    <Provider store={store}>
        <Router>
            <Layout/>
        </Router>
    </Provider>
    ,app)