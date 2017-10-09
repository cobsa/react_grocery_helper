export const addBasket = (name) => {
    return {
        type: 'ADD_BASKET',
        name
    }
}

export const deleteBasket = (id) => {
    return {
        type: 'DELETE_BASKET',
        id
    }
}

export const addIngredientToBasket = (basket_id, ingredient_name, ingredient_count) => {
    return {
        type: 'ADD_INGREDIENT_TO_BASKET',
        basket_id,
        ingredient_name,
        ingredient_count
    }
}

export const removeIngredintFromBasket = (basket_id, ingredient_name) => {
    return {
        type: 'REMOVE_INGREDIENT_FROM_BASKET',
        basket_id,
        ingredient_name
    }
}