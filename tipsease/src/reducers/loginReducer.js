import { LOGIN_START, 
		 LOGIN_SUCCESS, 
		 LOGIN_FAIL
	   } from "../actions"

const initialState = {

	loggingIn: false,
	error: null

}

export const loginReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case LOGIN_START:
			return {
				...state,
				loggingIn: true,
				error: ''
			}
	
		case LOGIN_SUCCESS:
				console.log(action.payload)
			return {
				...state,
				loggingIn: false,
				error: ''
			}

		case LOGIN_FAIL:
				console.log(action.payload)
			return {
				...state,
				loggingIn: false,
				error: action.payload
			}

		default:
		return state;
	}

}