import React from 'react'
import { Button } from 'react-bootstrap'

export default class LogOut extends React.Component {

    handleLogout() {
        // TODO
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