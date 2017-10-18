/*

Basket store structure

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
*/

const initialState = []
const basket = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_BASKET_TO_STORE': {
            let newArray = state.slice()
            newArray.push({
                name: action.payload.name,
                id: action.payload.id,
                ingredients: []
            })
            return newArray
        }

        case 'ADD_INGREDIENT_ARRAY_TO_BASKET': {
            let newArray = state.slice()
            newArray.forEach((basket, index) => {
                if (basket.id === action.payload.basket_id) {
                    newArray[index].ingredients = action.payload.ingredients
                }
            })
            return newArray
        }
        case 'ADD_INGREDIENT_TO_BASKET': {
            // Create new instance of array so orginal
            // is not mutated
            let newArray = state.slice()
            newArray.forEach((basket,index) => {
                if(basket.basket_id === action.payload.id) {
                    let ingredientArray = basket.ingredients.slice()
                    ingredientArray.push({
                        name: action.payload.ingredient_name,
                        count: action.payload.ingredient_count
                    })
                    newArray[index].ingredients = ingredientArray
                }
            })
            return newArray
        }
        case 'RESET_STORE': {
            return []
        }

        
        default:
            return state
    }
}

export default basket