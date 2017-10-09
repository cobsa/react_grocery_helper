import React from 'react'
import ReactDom from 'react-dom'
import { rootReducer } from './reducers/rootReducer'

var app = document.getElementById('app')
ReactDom.render( <h1>React is working</h1>, app)