import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

//  Exports for login Dispatches 
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
// **************************************** 
export const login = creds => dispatch => {
	console.log(creds)
	dispatch({ type: LOGIN_START});
	return axios
	.post('https://tipsease-be.herokuapp.com/api/auth/login', creds)
		.then(res => {
			console.log(res)
			localStorage.setItem('token', res.data.token)
			localStorage.setItem('id', res.data.userID)
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
		})
		.catch(err => {
			console.log(err.response.data.message)
			dispatch({ type: LOGIN_FAIL, payload: err.response.data.message })
		})
}

//  Exports for signin Dispatches 
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
// **************************************** 
export const signup = creds => dispatch => {
	dispatch({ type: SIGNUP_START});
	return axios
		.post('https://tipsease-be.herokuapp.com/api/auth/register', creds)
		.then(res => {
			console.log(res)
			localStorage.setItem('token', res.data.payload)
			localStorage.setItem('id', res.data.userID)
			dispatch({ type: SIGNUP_SUCCESS, payload:res.data.payload })
		})
		.catch(err => console.log(err.response))
}

//  Exports for get User Data Dispatches 
export const FETCH_USER_START   = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL    = 'FETCH_USER_FAIL';
// **************************************** 
export const getUserData = (id) => dispatch => {
	dispatch({ type: FETCH_USER_START})

	axiosWithAuth()
		.get(`/users/${id}`)
		.then(res => {
			console.log(res.data)
			dispatch({ type: FETCH_USER_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response)
			dispatch({ type: FETCH_USER_FAIL, payload: err.response.data.message });
		})
}

