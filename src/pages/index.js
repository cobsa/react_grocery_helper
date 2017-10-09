import React from 'react'
import {Jumbotron} from 'react-bootstrap'

export default class IndexPage extends React.Component {
    render() {
        return(
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>This is simple react application to handle shopping list via baskets&ingredients</p>
            </Jumbotron>)
    }
}