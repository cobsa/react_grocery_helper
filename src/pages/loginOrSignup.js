import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class LoginOrSignup extends React.Component {
    render() {
        return(
            <Jumbotron>
                <h1>Login or Sign up</h1>
                <p>To view this page please login or sign up</p>
                <LinkContainer to="/login">
                    <Button>Login</Button>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <Button>Sign up</Button>
                </LinkContainer>
            </Jumbotron>)
    }
}