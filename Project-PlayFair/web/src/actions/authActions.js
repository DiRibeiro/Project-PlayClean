import { toastr } from 'react-redux-toastr'
import { reset } from 'redux-form'
import axios from 'axios'

import BASE_URL from '../config/consts'

const TOKEN_VALIDATED = 'TOKEN_VALIDATED'
const TOKEN_FETCHED = 'TOKEN_FETCHED'
const LOGIN = 'LOGIN'

export const login = values => {
	return dispatch => {
		dispatch({ type: LOGIN, payload: true })
		axios
			.post(`${BASE_URL}/login`, values)
			.then(response => {
				if (response.status === 202) {
					toastr.error('Erro!', response.data)
					dispatch({ type: LOGIN, payload: false })
				} else if (response.status === 200) {
					axios.defaults.headers.common['authorization'] =
						response.data.token
					axios.defaults.headers.common['_id'] =
						response.data.result._id

					dispatch(reset('formLogin'))

					dispatch({
						type: TOKEN_FETCHED,
						payload: response.data.token
					})

					dispatch({ type: LOGIN, payload: false })
				}
			})
			.catch(error => {
				dispatch({ type: LOGIN, payload: false })
				toastr.error('Erro!', 'Internal server error')
			})
	}
}

export const signup = values => {
	return dispatch => {
		axios
			.post(`${BASE_URL}/signup`, values)
			.then(response => {
				if (response.status === 202)
					toastr.error('Erro!', response.data)
				else if (response.status === 200) {
					toastr.success('Sucesso!', response.data)
					dispatch(reset('formRegisterAccount'))
				}
			})
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const logout = () => {
	return {
		type: TOKEN_VALIDATED,
		payload: false
	}
}

export const validatedToken = token => {
	return dispatch => {
        token ? 
            axios
                .post(`${BASE_URL}/validateToken`, { token })
                .then(response =>{
                    dispatch({
                        type: TOKEN_VALIDATED,
                        payload: response.data.valid
                    })}
                )
                .catch(error =>{
                    dispatch({
                        type: TOKEN_VALIDATED,
                        payload: false
                    })}
                )
			: dispatch({
                type: TOKEN_VALIDATED,
                payload: false
            })
	}
}
