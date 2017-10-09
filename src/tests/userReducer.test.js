import user from '../reducers/userReducer'

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(user(undefined,{})).toEqual({
            user: {
                id: null,
                email: null,
            },
            logged: false,
            isFetching: false,
            error: null,
        })
    })
    it('should return user is logging in', () => {
        expect(user(undefined, {
            type: 'LOGIN_USER',
        })).toEqual({
            user: {
                id: null,
                email: null,
            },
            logged: false,
            isFetching: true,
            error: null,
        })
    })
    it('should return user is logging out', () => {
        expect(user(undefined, {
            type: 'LOGOUT_USER'
        })).toEqual({
            user: {
                id: null,
                email: null,
            },
            logged: false,
            isFetching: true,
            error: null,
        })
    })
    it('should log user in', () => {
        const id = "jlksad8907123"
        const email = "example@example.com"
        expect(user(undefined, {
            type: 'USER_LOGGED_IN',
            payload: {
                id,
                email
            }
        })).toEqual({
            user: {
                id: id,
                email: email,
            },
            logged: true,
            isFetching: false,
            error: null,
        })
    })
    it('should log user out', () => {
        const id = "jlksad8907123"
        const email = "example@example.com"
        const initialState = {
            user: {
                id: id,
                email: email,
            },
            logged: true,
            isFetching: false,
            error: null,
        }
        expect(user(initialState, {
            type: 'USER_LOGGED_OUT'
        })).toEqual({
            user: {
                id: null,
                email: null,
            },
            logged: false,
            isFetching: false,
            error: null,
        })
    })
    it('should add error to state', () => {
        const error = "I'm a Error"
        expect(user(undefined,{
            type: 'USER_ERROR',
            payload: {
                error
            }
        })).toEqual({
            user: {
                id: null,
                email: null,
            },
            logged: false,
            isFetching: false,
            error,
        })
    })
})