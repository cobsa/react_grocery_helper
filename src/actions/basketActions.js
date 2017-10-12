import firebase from '../firebaseConfig'

export const addBasket = (name) => {
    return function (dispatch) {
        const user = firebase.auth().currentUser
        if(user) {
            const uid = user.uid
            const basketsRef = firebase.database().ref('baskets')
            // Create new unique child node
            const newRef = basketsRef.push()
            // Set new node's values
            newRef.set({
                name,
                user: uid
            })

        } else {
            dispatch(error('USER_NOT_LOGGED_IN'))
        }
    }
}

export const addBasketToStore =  (name, id) => {
    return {
        type: 'ADD_BASKET_TO_STORE',
        payload: {
            name,
            id
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
    return function(dispatch) {
        const user = firebase.auth().currentUser
        const database = firebase.database()
        if(user) {
            database.ref('baskets/'+ basket_id).once('value', (snapshot) => {
                if(snapshot.child('ingredients').exists()) {
                    // If ingredients attribute exists already
                    const ingredientsRef = database.ref('baskets/'+ basket_id + '/ingredients')
                    const newRef = ingredientsRef.push()
                    newRef.set({
                        name: ingredient_name,
                        count: ingredient_count
                    })
                }
                else {
                    // If ingredients array does not exist
                    const basketRef = database.ref('baskets/'+ basket_id + '/ingredients')
                    const ingredientsRef = basketRef.push()
                    ingredientsRef.set({
                        name: ingredient_name,
                        count: ingredient_count
                    })
                }
            })
        } else {
            dispatch(error('USER_NOT_LOGGED_IN'))
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

export const addIngredientArrayToBasket = (basket_id,ingredients) => {
    return {
        type: 'ADD_INGREDIENT_ARRAY_TO_BASKET',
        payload: {
            basket_id,
            ingredients
        }
    }
}

export const updatingStore = () => {
    return {
        type: 'UPDATING_STORE',
        payload: {
            fetching:true
        }
    }
}

export const resetStore = () => {
    return {
        type: 'RESET_STORE'
    }
}

export const error = (error) => {
    return {
        type: 'BASKET_ERROR',
        payload: {
            error
        }
    }
}

export function getAll() {
    return function (dispatch) {
        const database = firebase.database()
        const user = firebase.auth().currentUser
        if(user) {
            const basketRef = database.ref('baskets/')
            basketRef.orderByChild('user').equalTo(user.uid).on('value', (snapshot) => {
                dispatch(resetStore())
                snapshot.forEach( (childSnapshot) => {
                    const basket_id = childSnapshot.key
                    dispatch(addBasketToStore(childSnapshot.child('name').val(), basket_id))
                    const ingredients = []
                    childSnapshot.child('ingredients').forEach( (ingredient) => {
                        ingredients.push({
                            name: ingredient.child('name').val(),
                            count: ingredient.child('count').val()
                        })
                    })
                    dispatch(addIngredientArrayToBasket(basket_id, ingredients))
                })
            })
        } else {
            dispatch(error('USER_NOT_LOGGED_IN. ' + user))
        }
    }
}
