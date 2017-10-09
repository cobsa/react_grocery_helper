import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/rootReducer'
import { createStore } from 'redux'


let store = createStore(rootReducer)
var app = document.getElementById('app')
ReactDom.render(
    <Provider store={store}>
        <Layout/>
    </Provider>
    ,app)