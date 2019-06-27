import { combineReducers } from 'redux'
import { waiterReducer } from './waiterReducer'
import { loginReducer } from './loginReducer'
import { dataManipReducer } from './dataManipReducer'

export default combineReducers({
	waiterReducer,
	loginReducer,
	dataManipReducer
});