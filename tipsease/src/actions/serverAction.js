import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

//  Exports for get Waiter Data Dispatches 
export const FETCH_WAITERALL_START   = 'FETCH_WAITERALL_START';
export const FETCH_WAITERALL_SUCCESS = 'FETCH_WAITERALL_SUCCESS';
export const FETCH_WAITERALL_FAIL    = 'FETCH_WAITERALL_FAIL';
// **************************************** 
export const getServerAll = () => dispatch => {
	dispatch({ type: FETCH_WAITERALL_START})

	axiosWithAuth()
		.get('/servers')
		.then(res => {
			console.log(res.data)
			dispatch({ type: FETCH_WAITERALL_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_WAITERALL_FAIL, payload: err.response });
		})
}

//  Exports for get Waiter Data Dispatches 
export const FETCH_WAITER_START   = 'FETCH_WAITER_START';
export const FETCH_WAITER_SUCCESS = 'FETCH_WAITER_SUCCESS';
export const FETCH_WAITER_FAIL    = 'FETCH_WAITER_FAIL';
// **************************************** 
export const getServer = (id) => dispatch => {
	dispatch({ type: FETCH_WAITER_START})

	axiosWithAuth()
		.get(`/servers/${id}`)
		.then(res => {
			console.log(res.data)
			dispatch({ type: FETCH_WAITER_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_WAITER_FAIL, payload: err.response });
		})
}