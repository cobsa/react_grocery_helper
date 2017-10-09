import React from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import {Route, Redirect} from 'react-router-dom'

import NavbarComponent from './navbar'
// Pages
import Baskets from '../pages/baskets'
import IndexPage from '../pages/index'
import LogIn from '../pages/login'
import SignUp from '../pages/signup'
import LogOut from '../pages/logout'
import LoginOrSignup from '../pages/loginOrSignup'


export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            logged: false
        }
        this.loggedIn = this.loggedIn.bind(this)
        
    }
    componentWillMount() {
    }
    loggedIn() {
        return this.state.logged
    }
    render() {
        return(
            <div>
                <NavbarComponent/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Route exact path="/" component={IndexPage}/>
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
                            <Route path="/loginOrSignup" component={LoginOrSignup}/>
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        )
    }
}