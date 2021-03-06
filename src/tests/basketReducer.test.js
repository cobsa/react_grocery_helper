import basket from '../reducers/basketReducer'

describe('basket reducer', () => {
    const initialState = [{
        name: 'Testi Basket',
        id: 'ijoapsdjad89213',
        ingredients: [
            {
                name: 'testi ingredient',
                count: 3
            },
            {
                name: 'test ingredient 2',
                count: 2
            }
        ]
    }]
    it('should return initial state', () => {
        expect(basket(initialState,{})).toEqual([
            {
                name: 'Testi Basket',
                id: 'ijoapsdjad89213',
                ingredients: [
                    {
                        name: 'testi ingredient',
                        count: 3
                    },
                    {
                        name: 'test ingredient 2',
                        count: 2
                    }
                ]
            }
        ])
    })
    it('should add basket', () => {
        const name = 'testing baskets'
        const id = '8921431huaisdjhf8asd'
        expect(basket(initialState,{
            type: 'ADD_BASKET_TO_STORE',
            payload: {
                name,
                id
            }
        })).toEqual([
            {
                name: 'Testi Basket',
                id: 'ijoapsdjad89213',
                ingredients: [
                    {
                        name: 'testi ingredient',
                        count: 3
                    },
                    {
                        name: 'test ingredient 2',
                        count: 2
                    }
                ]
            },
            {
                name,
                id,
                ingredients: []
            }
        ])
    })
    it('should add ingredient to initial basket', () => {
        let basket_id = 'ijoapsdjad89213'
        let ingredient_name = 'testi ingredient 1'
        let ingredient_count = 2
        expect(basket(initialState,{
            type: 'ADD_INGREDIENT_TO_BASKET',
            payload: {
                basket_id,
                ingredient_name,
                ingredient_count,
            }
        })).toEqual([{
            name: 'Testi Basket',
            id: 'ijoapsdjad89213',
            ingredients: [
                {
                    name: 'testi ingredient',
                    count: 3
                },
                {
                    name: 'test ingredient 2',
                    count: 2
                },
                {
                    name: ingredient_name,
                    count: ingredient_count
                }
            ]
        }

        ])
    })
    it('should add ingredient array to basket', () => {
        const basket_id = 'ijoapsdjad89213'
        const ingredients_array = [
            {
                name: 'ingredient 4',
                count: 2
            },
            {
                name: 'ingredient 5',
                count: 22
            },
            {
                name: 'ingredient 6',
                count: 211
            },{
                name: 'ingredient 7',
                count: 23
            }
        ]
        expect(basket(initialState,{
            type: 'ADD_INGREDIENT_ARRAY_TO_BASKET',
            payload: {
                basket_id,
                ingredients: ingredients_array
            }
        })).toEqual([{
            name: 'Testi Basket',
            id: 'ijoapsdjad89213',
            ingredients: [
                {
                    name: 'ingredient 4',
                    count: 2
                },
                {
                    name: 'ingredient 5',
                    count: 22
                },
                {
                    name: 'ingredient 6',
                    count: 211
                },{
                    name: 'ingredient 7',
                    count: 23
                }
            ]
        }])

    })
    it('should reset store', () => {
        expect(basket(initialState,{
            type: 'RESET_STORE'
        })).toEqual([])
    })
})