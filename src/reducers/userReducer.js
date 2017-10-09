const defaultState = {
    user: {
        id: null,
        email: null,
    },
    logged: false,
    isFetching: false,
    error: null,

}

function user(state=defaultState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isFetching: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                isFetching: true
            }
        case 'USER_LOGGED_IN':
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    email: action.payload.email
                },
                logged: true,
                isFetching: false,
            }
        case 'USER_LOGGED_OUT': 
            return {
                ...state,
                user: {
                    id: null,
                    email: null
                },
                logged: false,
                isFetching: false,
            }
        case 'USER_ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default user