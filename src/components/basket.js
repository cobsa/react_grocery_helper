import React from 'react'
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'

import { addIngredientToBasket, deleteBasket, removeIngredientFromBasket } from '../actions/basketActions'



export default class Basket extends React.Component {
    constructor() {
        super()
        this.handleIngredientChange = this.handleIngredientChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeBasket = this.removeBasket.bind(this)
        this.state = {
            ingredient: ''
        }
    }

    handleIngredientChange(e) {
        this.setState({
            ingredient: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.dispatch(addIngredientToBasket(this.props.id,this.state.ingredient, 3))
        this.setState({
            ingredient: ''
        })

    }
    removeBasket(id, e) {
        e.preventDefault()
        this.props.dispatch(deleteBasket(id))
    }

    removeIngredient(basket_id, ingredient_name, e) {
        e.preventDefault()
        this.props.dispatch(removeIngredientFromBasket(basket_id,ingredient_name))
    }
    
    render() {
        var {ingredients} = this.props
        var basketIngredients
        if(ingredients != undefined) {
            basketIngredients = ingredients.map((ingredient)=>{
                return (
                    <ListGroupItem key={ingredient.name}>
                        {ingredient.name} <Button bsSize='xsmall' bsStyle='danger' onClick={(e) => this.removeIngredient(this.props.id, ingredient.name, e)}><Glyphicon glyph='remove'/></Button>
                    </ListGroupItem>)
            })
        }
        return(
            <div>
                <ListGroup>
                    {basketIngredients}
                    <ListGroupItem>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId='addIngredientToBasketForm'>
                                <FormControl type='text'
                                    value={this.state.ingredient}
                                    placeholder='Add ingredient'
                                    onChange={this.handleIngredientChange}/>

                            </FormGroup>
                            <Button type='submit'>Add ingredient</Button>

                        </form>
                    </ListGroupItem>
                </ListGroup>
                <Button bsStyle='danger' onClick={(e) => this.removeBasket(this.props.id, e)}>Remove Basket </Button>
            </div>
        )
    }
}