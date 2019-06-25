import { combineReducers } from 'redux';
import { waiterReducer } from './waiterReducer';
import { loginReducer } from './loginReducer'

export default combineReducers({
	waiterReducer,
	loginReducer
});