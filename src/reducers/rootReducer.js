import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user  from './userReducer'
import basket from './basketReducer'

const rootReducers = combineReducers({
    user,
    basket,
    router: routerReducer
})

export default rootReducers