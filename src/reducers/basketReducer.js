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

const basket = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_BASKET': {
            let newArray = state.slice()
            newArray.push({
                name: action.payload.name,
                id: null,
                ingredients: []
            })
            return newArray
        }
        case 'REMOVE_BASKET': {
            return state
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
        case 'REMOVE_INGREDIENT_FROM_BASKET': {
            return state
        }

        
        default:
            return state
    }
}

export default basket