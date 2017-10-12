import React from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import {Route} from 'react-router'
import { connect } from 'react-redux'

import NavbarComponent from './navbar'
// Pages
import Baskets from '../pages/baskets'
import IndexPage from '../pages/index'
import LogIn from '../pages/login'
import SignUp from '../pages/signup'
import LogOut from '../pages/logout'
import LoginOrSignup from '../pages/loginOrSignup'

@connect((store)=> {
    return {
        logged: store.user.logged
    }
})
export default class Layout extends React.Component {
    constructor() {
        super()
        this.loggedIn = this.loggedIn.bind(this)
        
    }
    loggedIn() {
        return this.props.logged
    }
    render() {
        return(
            <div>
                <NavbarComponent/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Route exact path="/" component={IndexPage}/>
                            <Route path="/baskets" component={Baskets}/>
                            <Route path="/loginOrSignup" component={LoginOrSignup}/>
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        )
    }
}