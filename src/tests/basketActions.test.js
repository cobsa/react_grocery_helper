import * as actions from '../actions/basketActions'

describe('actions', () => {
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
})