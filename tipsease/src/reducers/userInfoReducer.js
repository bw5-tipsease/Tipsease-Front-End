import { FETCH_USER_START,  
		 FETCH_USER_SUCCESS,
		 FETCH_USER_FAIL   
       } from "../actions"

const initialState = {

	userInfo: [],
	error: '',
	fetchingUser: false,


}

export const userInfoReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case FETCH_USER_START:
			return {
				...state,
				fetchingUser: true,
				error: ''
			}
	
		case FETCH_USER_SUCCESS:
			return {
				...state,
				fetchingUser: false,
				userInfo: action.payload
			}

		case FETCH_USER_FAIL:
			return {
				...state,
				fetchingUser: false,
				error: action.payload
			}

		default:
		return state;
	}
}