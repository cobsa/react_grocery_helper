import { combineReducers } from 'redux'

import user  from './userReducer'
import basket from './basketReducer'

const rootReducers = combineReducers({
    user,
    basket
})

export default rootReducers