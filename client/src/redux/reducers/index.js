import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import taches from './tachesReducer'

export default combineReducers({
    auth,
    token,
    users,
    taches
})