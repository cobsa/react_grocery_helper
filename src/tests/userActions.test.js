import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import * as actions from '../actions/userActions'


const middleWares = [thunk]
const mockStore = configureMockStore(middleWares)

describe('actions', () => {

    it('should create action to change user to logging in', () => {
        const expectedAction = {
            type: 'LOGIN_USER'
        }
        expect(actions.loggingUser()).toEqual(expectedAction)
    })

    it('should create action to log in user', () => {
        const uid = 'ADASKJDLH7216438974hLDASD'
        const email = 'example@example.com'
        const expectedAction = {
            type: 'USER_LOGGED_IN',
            payload: {
                id: uid,
                email
            }
        }
        expect(actions.userLoggedIn(uid, email)).toEqual(expectedAction)
    })
    
    it('should create action to log out user', () => {       
        const expectedActions =  [
            { type: 'USER_LOGGED_OUT' },
            { type: 'RESET_STORE' }
        ]

        const store = mockStore({})        
        store.dispatch(actions.userLoggedOut())
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('should create action to add error state', () => {
        const error = 'LOGGING FAILED'
        const expectedAction = {
            type: 'USER_ERROR',
            payload: {
                error
            }
        }
        expect(actions.userError(error)).toEqual(expectedAction)
    })
})