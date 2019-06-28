import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

//  Exports for get Rest Data Dispatches 
export const FETCH_RESTALL_START   = 'FETCH_RESTALL_START';
export const FETCH_RESTALL_SUCCESS = 'FETCH_RESTALL_SUCCESS';
export const FETCH_RESTALL_FAIL    = 'FETCH_RESTALL_FAIL';
// **************************************** 
export const getRestaurantAll= () => dispatch => {
	dispatch({ type: FETCH_RESTALL_START})

	axiosWithAuth()
		.get('/restaurants')
		.then(res => {
			console.log(res.data)
			dispatch({ type: FETCH_RESTALL_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_RESTALL_FAIL, payload: err.response });
		})
}

//  Exports for get Rest Data Dispatches 
export const FETCH_REST_START   = 'FETCH_REST_START';
export const FETCH_REST_SUCCESS = 'FETCH_REST_SUCCESS';
export const FETCH_REST_FAIL    = 'FETCH_REST_FAIL';
// **************************************** 
export const getRestaurant = (id) => dispatch => {
	dispatch({ type: FETCH_REST_START})

	axiosWithAuth()
		.get(`/restaurants/${id}`)
		.then(res => {
			console.log(res.data)
			// dispatch({ type: FETCH_REST_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_REST_FAIL, payload: err.response });
		})
}