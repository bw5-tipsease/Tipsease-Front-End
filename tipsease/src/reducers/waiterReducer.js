import { data } from "../store"

import { FETCH_WAITERALL_START  ,  
	     FETCH_WAITERALL_SUCCESS,
		 FETCH_WAITERALL_FAIL,
		 FETCH_WAITER_START,  
		 FETCH_WAITER_SUCCESS,
         FETCH_WAITER_FAIL     
  } from "../actions/serverAction"

const initialState = {

	waiters: data,
	servers: [],
	error: '',
	fetchingServer: false,

}

export const waiterReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case FETCH_WAITERALL_START:
			return {
				...state,
				fetchingUser: true,
				error: ''
			}
	
		case FETCH_WAITERALL_SUCCESS:
			return {
				...state,
				fetchingUser: false,
				servers: action.payload
			}

		case FETCH_WAITERALL_FAIL:
			return {
				...state,
				fetchingUser: false,
				error: action.payload
			}

		case FETCH_WAITER_START:
			return {
				...state,
				fetchingUser: true,
				error: ''
			}
	
		case FETCH_WAITER_SUCCESS:
			return {
				...state,
				fetchingUser: false,
				servers: action.payload
			}

		case FETCH_WAITER_FAIL:
			return {
				...state,
				fetchingUser: false,
				error: action.payload
			}

		default:
		return state;
	}
}