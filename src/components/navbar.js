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
        // Defines what is displayed when user if logged in and not
        var user = this.props.user
        if(user.id) {
            return (
                <Nav pullRight>
                    <LinkContainer to="/logout">
                        <NavItem>Log out {user.email}</NavItem>
                    </LinkContainer>
                </Nav>
            )
        }
        else {
            return (
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <NavItem>Sign up</NavItem>
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
                    <IndexLinkContainer to="">
                        <NavItem>Home</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/baskets">
                        <NavItem>Baskets</NavItem>
                    </LinkContainer>
                </Nav>
                {LoginMenu}
            </Navbar>
        )
    }
}