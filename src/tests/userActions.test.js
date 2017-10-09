import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import { MockFirebase, MockFirebaseSdk } from 'firebase-mock'
import proxyquire from 'proxyquire'

import * as actions from '../actions/userActions'

describe('actions', () => {
    it('should create action to change user to logging in', () => {
        const expectedAction = {
            type: 'LOGIN_USER'
        }
        expect(actions.loggingUser()).toEqual(expectedAction)
    })
    it('should create action to change user to logging out', () => {
        const expectedAction = {
            type: 'LOGOUT_USER'
        }
        expect(actions.loggingOutUser()).toEqual(expectedAction)
    })
    it('should create action to log in user', () => {
        const uid = "ADASKJDLH7216438974hLDASD"
        const email = "example@example.com"
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
        const expectedAction = {
            type: 'USER_LOGGED_OUT'
        }
        expect(actions.userLoggedOut()).toEqual(expectedAction)
    })
    it('should create action to add error state', () => {
        const error = "LOGGING FAILED"
        const expectedAction = {
            type: 'USER_ERROR',
            payload: {
                error
            }
        }
        expect(actions.error(error)).toEqual(expectedAction)
    })
})

// Test firebase auth

const middleWares = [thunk]
const mockStore = configureMockStore(middleWares)

/*
describe('firebase auth actions', () => {
    it('creates actions on failed login', () => {
        const email = "example@example.com"
        const password = "=HJKAJKLÖDS213"
        const expectedActions = [
            {type: 'LOGIN_USER'},
            {type: 'USER_ERROR',
            payload: {
                error: 'something'
            }}]
        const store = mockStore({})
        const mockdatabase = new MockFirebase()
        const mockauth = new MockFirebase()
        const mocksdk = MockFirebaseSdk(function(path){
            return path ? mockdatabase.child(path):mockdatabase
        },function() {
            return mockauth
        })
        proxyquire('../', {
            firebase: mocksdk
        })
        return store.dispatch(actions.loginUser(email,password)).then( () =>{
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
*/