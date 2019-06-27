import { 
		FETCH_DATA_START,
		FETCH_DATA_SUCCESS,
		FETCH_DATA_FAIL,
		ADD_DATA_START,
		ADD_DATA_SUCCESS,
		ADD_DATA_FAIL
  } from "../actions";

const initialState = {
	waiters: [],	
	fetchingWaiters: false,	
	addingTip: false,
	error: null
}

export const dataManipReducer = (state = initialState, action) => {
  
	switch (action.type) {
		
		case FETCH_DATA_START:
			return {
				...state,
				fetchingWaiters: true,
				error: ''
			}

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchingWaiters: false,
				waiters: action.payload
			}
	
		case FETCH_DATA_FAIL:
			return {
				...state,
				fetchingWaiters: false,
				error: action.payload
			}

		case ADD_DATA_START:
			return {
				...state, 
				addingTip: true,
				error: ''
			}
		
		case ADD_DATA_SUCCESS:
		return {
			...state, 
			waiters: action.payload,
			addingTip: false,
			error: ''
		}

		case ADD_DATA_FAIL:
			return {
				...state,
				fetchingWaiters: false,
				error: action.payload
			}

		default:
			return state;
	}

}

