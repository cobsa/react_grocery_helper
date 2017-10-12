import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import {Grid, Row, Col } from 'react-bootstrap'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'

import Layout from './components/layout'
import rootReducer  from './reducers/rootReducer'

import NavbarComponent from './components/navbar'

// Pages

import Baskets from './pages/baskets'
import IndexPage from './pages/index'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import LogOut from './pages/logout'
import LoginOrSignup from './pages/loginOrSignup'


const history = createHistory()
const middleware = routerMiddleware(history)

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
        <ConnectedRouter history={history}>
            <div>
            <NavbarComponent/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                        <Route exact path="/" component={IndexPage}/>
                        <Route path="/baskets" component={Baskets}/>
                        <Route path="/login" component={LogIn}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/logout" component={LogOut}/>
                        <Route path="/loginOrSignup" component={LoginOrSignup}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </ConnectedRouter>
    </Provider>
    ,app)