import { SIGNUP_START, 
		 SIGNUP_SUCCESS, 
		 SIGNUP_FAIL
  	   } from "../actions"

const initialState = {

signingIn: false,
error: null

}

export const signUpReducer = (state = initialState, action) => {

switch (action.type) {
   
   case SIGNUP_START:
	   return {
		   ...state,
		   loggingIn: true,
		   error: ''
	   }

   case SIGNUP_SUCCESS:
	   return {
		   ...state,
		   loggingIn: false
	   }
   default:
   return state;
}

}