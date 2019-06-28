import { data } from "../store"

import { FETCH_RESTALL_START,  
		 FETCH_RESTALL_SUCCESS,
	     FETCH_RESTALL_FAIL   
  } from "../actions/restaurantsAction"

const initialState = {
	
	restaurants: [],
	error: '',
	fetchingRest: false,

}

export const restaurantReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case FETCH_RESTALL_START:
			return {
				...state,
				fetchingRest: true,
				error: ''
			}
	
		case FETCH_RESTALL_SUCCESS:
			return {
				...state,
				fetchingRest: false,
				restaurants: action.payload
			}

		case FETCH_RESTALL_FAIL:
			return {
				...state,
				fetchingRest: false,
				error: action.payload
			}

		default:
		return state;
	}
}