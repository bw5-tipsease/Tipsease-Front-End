import { combineReducers } from 'redux'
import { waiterReducer } from './waiterReducer'
import { loginReducer } from './loginReducer'
import{ transReducer } from './transReducer'
import { userInfoReducer } from './userInfoReducer'
import { restaurantReducer } from './restaurantReducer'

export default combineReducers({
	waiterReducer,
	loginReducer,
	restaurantReducer,
	userInfoReducer,
	transReducer
});