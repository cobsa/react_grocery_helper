import React from 'react'
import ReactDom from 'react-dom'
import { Provider, connect } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import {Grid, Row, Col } from 'react-bootstrap'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {Route, Redirect} from 'react-router'

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

import { checkLoginStatus } from './actions/userActions'


const history = createHistory()
const middleware = routerMiddleware(history)

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)
@connect( (store) => {
    return {
        logged: store.user.logged
    }
})
class MainApp extends React.Component {
    constructor() {
        super()
        this.loggedIn = this.loggedIn.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(checkLoginStatus())
    }

    loggedIn() {
        return this.props.logged
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                <NavbarComponent/>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <Route exact path="/" component={IndexPage}/>
                                <Route path='/loginOrSignup' component={LoginOrSignup}/>
                                <Route path="/baskets" render={() => (
                                this.loggedIn() ? (
                                    <Baskets/>
                                    ) : (
                                    <Redirect to="/loginOrSignup"/>
                                    )
                                )}/>
                                <Route path="/login" render={() => (
                                    this.loggedIn() ? (
                                        <Redirect to="/"/>
                                    ) : (
                                        <LogIn/>
                                    )
                                )}/>
                                <Route path="/signup" render={() => (
                                    this.loggedIn() ? (
                                        <Redirect to="/"/>
                                    ) : (
                                        <SignUp/>
                                    )
                                )}/>
                                <Route path="/logout" render={() => (
                                    this.loggedIn() ? (
                                        <LogOut/>
                                    ) : (
                                        <Redirect to="/"/>
                                    )
                                )}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </ConnectedRouter>
        )
    }
}
var app = document.getElementById('app')
ReactDom.render(
    <Provider store={store}>
        <MainApp/>
    </Provider>
    ,app)