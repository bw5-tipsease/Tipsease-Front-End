import { 
		ADD_TRAN_START,  
		ADD_TRAN_SUCCESS,
		ADD_TRAN_FAIL   
  } from "../actions/transAction";

const initialState = {
	tips: [],		
	addingTip: false,
	error: null
}

export const transReducer = (state = initialState, action) => {
  
	switch (action.type) {
		

		case ADD_TRAN_START:
			return {
				...state, 
				addingTip: true,
				error: ''
			}
		
		case ADD_TRAN_SUCCESS:
		return {
			...state, 
			tips: action.payload,
			addingTip: false,
			error: ''
		}

		case ADD_TRAN_FAIL:
			return {
				...state,
				addingTip: false,
				error: action.payload
			}

		default:
			return state;
	}

}

