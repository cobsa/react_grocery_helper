import  firebase  from '../firebaseConfig'

import { resetStore, getAll} from './basketActions'

export const loggingUser = () =>  {
    return {
        type: 'LOGIN_USER'
    }
}

export const loggingOutUser = () => {
    return function(dispatch) {
        firebase.auth().signOut().then( () => {
            dispatch(userLoggedOut())
        })
    }
}

export const userLoggedIn = (uid, email) => {
    return {
        type: 'USER_LOGGED_IN',
        payload: {
            id: uid,
            email
        }
    }
}
export function userLoggedOut () {
    return function (dispatch) {
        dispatch(resetStore)
        dispatch(
            {type: 'USER_LOGGED_OUT'}
        )
    }
}
export const userError = (error) => {
    return {
        type: 'USER_ERROR',
        payload: {
            error
        }
    }
}

export function loginUser(email, password) {
    return function (dispatch) {
        // Set state to isFetching = true
        dispatch(loggingUser())
        // Set listeners for auth events
        firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=> {
            dispatch(userError(error.message))
        })
    }
}

export function signUpUser(email, password) {
    return function (dispatch) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch( (error) => {
            dispatch(userError(error.message))
        })
    }
}

export function checkLoginStatus() {
    // Must be initialized before any other actions is used
    return function(dispatch) {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user) {
                // Initialize listeners for authChange and value change in /baskets
                dispatch(userLoggedIn(user.uid, user.email))
                dispatch(getAll())
            }
        })
    }
}