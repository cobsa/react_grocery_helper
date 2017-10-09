import  fire  from '../firebaseConfig'

export const loggingUser = () =>  {
    return {
        type: 'LOGIN_USER'
    }
}

export const loggingOutUser = () => {
    return {
        type: 'LOGOUT_USER'
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
export const userLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT'
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
        //set listeners for auth events
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                // User is logged in
                let uid = user.uid
                let email = user.email
                dispatch(userLoggedIn(uid, email))
            } else {
                // User is logged out 
                dispatch(userLoggedOut())
            }
        })
        return fire.auth().signInWithEmailAndPassword(email,password).catch((error)=> {
            dispatch(userError(error.message))
        })
    }
}