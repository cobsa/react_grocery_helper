import React from 'react'
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'



export default class Basket extends React.Component {
    constructor() {
        super()
        this.handleIngredientChange = this.handleIngredientChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        
        this.setState({
            ingredient: ''
        })

    }
    render() {
        var {ingredients} = this.props
        var basketIngredients
        if(ingredients != undefined) {
            basketIngredients = ingredients.map((ingredient)=>{
                return (<ListGroupItem key={ingredient.name}>{ingredient.name}</ListGroupItem>)
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
                
            </div>
        )
    }
}