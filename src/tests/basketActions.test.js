import * as actions from '../actions/basketActions'

describe('actions', () => {
    it('should create action to add basket', () => {
        const name = "basket_testi"
        const expectedAction = {
            type: 'ADD_BASKET',
            payload: {
                name
            }
        }
        expect(actions.addBasket(name)).toEqual(expectedAction)
    })
    it('should create action to delete basket', () => {
        const id = '12983471289043'
        const expectedAction = {
            type: 'DELETE_BASKET',
            payload: {
                id
            }
        }
        expect(actions.deleteBasket(id)).toEqual(expectedAction)
    })
    it('shoud create action to add ingredient to basket', () => {
        const basket_id = '21398hasd'
        const ingredient_name = 'ingredient_name'
        const ingredient_count = 2
        const expectedAction = {
            type: 'ADD_INGREDIENT_TO_BASKET',
            payload: {
                basket_id,
                ingredient_name,
                ingredient_count
            }
        }
        expect(actions.addIngredientToBasket(basket_id,ingredient_name,ingredient_count))
            .toEqual(expectedAction)
    })
    it('should create action to remove ingredient from basket', () => {
        const basket_id = 'hsad9123hui'
        const ingredient_name = 'someingredient'
        const expectedAction = {
            type: 'REMOVE_INGREDIENT_FROM_BASKET',
            payload: {
                basket_id,
                ingredient_name
            }
        }
        expect(actions.removeIngredientFromBasket(basket_id, ingredient_name))
            .toEqual(expectedAction)
        
    })
    it('should create action to get all', () => {
        const expectedAction = {
            type: 'GET_ALL'
        }
        expect(actions.getAll()).toEqual(expectedAction)
    })
})