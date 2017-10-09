import React from 'react'
import { Alert, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'

import {loginUser} from '../actions/userActions'

@connect((store) => {
    return {
        user: store.user
    }
})
export default class LogIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
        }
        
    }

    getEmailState() {
        const length = this.state.email.length
        if(length > 10 ) return 'success'
        else if (length > 5) return 'warning'
        else if (length > 0) return 'error'
    }

    getPasswordState() {
        const length = this.state.password.length
        if(length > 10 ) return 'success'
        else if (length > 5) return 'warning'
        else if (length > 0) return 'error'
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        // TODO
        e.preventDefault()
        this.props.dispatch(loginUser(this.state.email, this.state.password))
    }

    printError() {
        if(this.state.error != '') {
            return (
                <div>
                    <Alert bsStyle="danger">
                        <strong>Login error:</strong> {this.state.error}
                    </Alert> 
                </div>
                
            )
        } else {
            return (<div></div>)
        }
    }

    render() {
        var ErrorMessage = this.printError()
        console.log(this.props)
        return(      
            <div>
                <h2>Login page</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup
                        controlId="formEmail"
                        validationState={this.getEmailState()}>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            placeholder="Enter email"
                            onChange={this.handleEmail.bind(this)} />
                    </FormGroup>
                    <FormGroup
                        controlId="formPassword"
                        validationState={this.getPasswordState()}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="Enter password"
                            onChange={this.handlePassword.bind(this)} />
                    </FormGroup>
                    <Button type="submit">
                        Login
                    </Button>
                </form>
                <p>{ErrorMessage}</p>
            </div>
        )
    }
}