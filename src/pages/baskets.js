import React from 'react'
import { Panel, PanelGroup,FormGroup, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

import BasketStore from '../basketStore'
import Basket from '../components/basket'


export default class Baskets extends React.Component {
    constructor() {
        super()
        this.addBasket = this.addBasket.bind(this)
        this.handleBasketName = this.handleBasketName.bind(this)
        this.state = {
            baskets: BasketStore.getAll(),
            newBasketName: ''
        }
    }
    
    
    getBaskets() {
        //TODO
    }
    handleBasketName(e) {
        this.setState({
            newBasketName: e.target.value
        })
    }
    addBasket(e) {
        //TODO
    }
    render() {
        const { baskets } = this.state
        var BasketComponents = baskets.map((basket) => {
            return (<Panel collapsible header={basket.name} key={basket.id + 'panel'}><Basket key={basket.id} {...basket} /></Panel>)
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