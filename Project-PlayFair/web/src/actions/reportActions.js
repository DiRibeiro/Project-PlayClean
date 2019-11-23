import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const REPORTS_FETCHED = 'REPORTS_FETCHED'

export const getReports = () => dispatch => {
	return fetch(`${BASE_URL}/report`, {
		method: 'get',
		headers: {
			"Content-type": "application/json"
		}
	}).then(response => {
			response.json()
				.then(result => 
					dispatch({
						type: REPORTS_FETCHED,
						payload: result
					})
				)
		}).catch(error => toastr.error('Erro!', 'Internal server error'))
}

export const postReport = values => dispatch => {
	axios
		.post(`${BASE_URL}/report`, values, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		})
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(
					reset('newReportForm')
					)
				window.location = '/listReport'                 // dont forget to remove that fucking shit
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}

export const setStatus = (status, _id) => {
	return dispatch => {
		axios
			.post(`${BASE_URL}/reportStatus`, { status, _id })
			.then(response => {
				if (response.status === 202) toastr.error('Erro!', response)
				else if (response.status === 200) {
					toastr.success(
						'Sucesso!',
						'Registro atualizado com sucesso!'
					)
					dispatch(getReports())
				}
			})
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}
