import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

//  Exports for get trans Data Dispatches 
export const FETCH_TRANSALL_START   = 'FETCH_TRANSALL_START';
export const FETCH_TRANSALL_SUCCESS = 'FETCH_TRANSALL_SUCCESS';
export const FETCH_TRANSALL_FAIL    = 'FETCH_TRANSALL_FAIL';
// **************************************** 
export const getTransAll= () => dispatch => {
	dispatch({ type: FETCH_TRANSALL_START})

	axiosWithAuth()
		.get('/transactions')
		.then(res => {
			console.log(res.data)
			// dispatch({ type: FETCH_TRANSALL_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_TRANSALL_FAIL, payload: err.response });
		})
}

//  Exports for get trans Data Dispatches 
export const FETCH_TRAN_START   = 'FETCH_TRAN_START';
export const FETCH_TRAN_SUCCESS = 'FETCH_TRAN_SUCCESS';
export const FETCH_TRAN_FAIL    = 'FETCH_TRAN_FAIL';
// **************************************** 
export const getTran= (id) => dispatch => {
	dispatch({ type: FETCH_TRANSALL_START})

	axiosWithAuth()
		.get(`/transactions${id}`)
		.then(res => {
			console.log(res.data)
			// dispatch({ type: FETCH_TRANSALL_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_TRANSALL_FAIL, payload: err.response });
		})
}

export const ADD_TRAN_START   = 'ADD_TRAN_START';
export const ADD_TRAN_SUCCESS = 'ADD_TRAN_SUCCESS';
export const ADD_TRAN_FAIL    = 'ADD_TRAN_FAIL';
// **************************************** 
export const addTran= (trans) => dispatch => {
	dispatch({ type: ADD_TRAN_START})

	axiosWithAuth()
		.post(`/transactions`, trans)
		.then(res => {
			console.log(res)
			dispatch({ type: ADD_TRAN_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: ADD_TRAN_FAIL, payload: err.response });
		})
}

