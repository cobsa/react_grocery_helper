import * as actions from '../actions/basketActions'

describe('actions', () => {

    it('should create action to add basket to store', () => {
        const name = 'basket name'
        const id = 'basket_id'
        expect(actions.addBasketToStore(name, id)).toEqual({
            type: 'ADD_BASKET_TO_STORE',
            payload: {
                name,
                id
            }
        })
    })

    it('should create action to add ingredient array to basket', () => {
        const basket_id = 'jaosd981238hads'
        const ingredients = [
            'ingredient 1',
            'ingredient 2'
        ]

        expect(actions.addIngredientArrayToBasket(basket_id, ingredients)).toEqual({
            type: 'ADD_INGREDIENT_ARRAY_TO_BASKET',
            payload: {
                basket_id,
                ingredients
            }
        })
    })

    it('should create action to reset store', () => {
        expect(actions.resetStore()).toEqual({
            type: 'RESET_STORE'
        })
    })
    it('should create action to set error state', () => {
        const error = 'RANDOM_ERROR_MESSAGE'
        expect(actions.error(error)).toEqual({
            type: 'BASKET_ERROR',
            payload: {
                error
            }
        })
    })
})