export const addBasket = (name) => {
    return {
        type: 'ADD_BASKET',
        payload: {
            name
        }
    }   
}

export const deleteBasket = (id) => {
    return {
        type: 'DELETE_BASKET',
        payload: {
            id
        }
    }
}

export const addIngredientToBasket = (basket_id, ingredient_name, ingredient_count) => {
    return {
        type: 'ADD_INGREDIENT_TO_BASKET',
        payload: {
            basket_id,
            ingredient_name,
            ingredient_count
        }
        
    }
}

export const removeIngredientFromBasket = (basket_id, ingredient_name) => {
    return {
        type: 'REMOVE_INGREDIENT_FROM_BASKET',
        payload: {
            basket_id,
            ingredient_name
        }
        
    }
}
export const getAll = () => {
    return {
        type: 'GET_ALL'
    }
}