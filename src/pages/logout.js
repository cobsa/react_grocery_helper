import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { loggingOutUser } from '../actions/userActions'

@connect((store) => {
    return {

    }
})
export default class LogOut extends React.Component {

    handleLogout() {
        // TODO
        this.props.dispatch(loggingOutUser())
    }
    render() {
        return(
            <div>
                <Button onClick={this.handleLogout.bind(this)}>
                    Log out</Button>
            </div>
        )
    }
}