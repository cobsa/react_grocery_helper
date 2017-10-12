import React from 'react'
import { Panel, PanelGroup,FormGroup, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import {connect} from 'react-redux'

import Basket from '../components/basket'
import {addBasket, getAll} from '../actions/basketActions'

@connect((store) => {
    return {
        baskets: store.basket
    }
})
export default class Baskets extends React.Component {
    constructor() {
        super()
        this.addBasket = this.addBasket.bind(this)
        this.handleBasketName = this.handleBasketName.bind(this)
        this.state = {
            newBasketName: undefined
        }
    }

    componentWillMount() {
        this.props.dispatch(getAll())
    }

    handleBasketName(e) {
        this.setState({
            newBasketName: e.target.value
        })
    }
    addBasket(e) {
        e.preventDefault()
        this.props.dispatch(addBasket(this.state.newBasketName))

    }
    render() {
        const { baskets } = this.props
        const {dispatch } = this.props
        var BasketComponents = baskets.map((basket) => {
            return (<Panel collapsible header={basket.name} key={basket.id + 'panel'}><Basket key={basket.id} {...basket} dispatch={dispatch} /></Panel>)
        })
        return(
            <div>
                <h1>Baskets</h1>
                {BasketComponents}
                <div>
                    <form onSubmit={this.addBasket}>
                        <FormGroup controlId="formAddBasket">
                            <FormControl type="text"
                                placeholder="Enter basket name"
                                value={this.state.newBasketName}
                                onChange={this.handleBasketName}/>
                        </FormGroup>
                        <Button type="submit">Add Basket</Button>
                    </form>
                </div>
            </div>
       
        )
    }
}