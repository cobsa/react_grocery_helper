import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        user: store.user.user
    }
})
export default class NavbarComponent extends React.Component {
    loginOrSignUp() {
        // todo get user
        var user = this.props.user
        if(user.id) {
            return (
                <Nav pullRight>
                    <LinkContainer to="/logout">
                        <NavItem eventKey={4}>Log out {user.email}</NavItem>
                    </LinkContainer>
                </Nav>
            )
        }
        else {
            return (
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem eventKey={5}>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <NavItem eventKey={6}>Sign up</NavItem>
                    </LinkContainer>
                </Nav>
            )
        }
    }
    render() {
        const LoginMenu = this.loginOrSignUp()
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Grocery Helper</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem eventKey={1}>Home</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/baskets">
                        <NavItem eventKey={2}>Baskets</NavItem>
                    </LinkContainer>
                </Nav>
                {LoginMenu}
            </Navbar>
        )
    }
}