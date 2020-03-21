import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const REPORTS_FETCHED = 'REPORTS_FETCHED'
const LOAD = 'LOAD'

export const getReports = () => {	
	return dispatch => {
		axios.get(`${ BASE_URL }/report`)
		.then(result => {
			console.log(result)
			dispatch({ type: REPORTS_FETCHED , payload: result.data })

		}).catch(err => {
			console.error(err)
		})
	}
}

export const postReport = values => dispatch => {
	dispatch({ type: LOAD, payload: true })
	axios
		 .post(`${BASE_URL}/report`, values, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		})
		.then(response => {
			if (response.status === 400) {
				toastr.error('Erro!', response)
				dispatch({ type: LOAD, payload: false })

			}else if (response.status === 200) {
				dispatch({ type: LOAD, payload: false })
				dispatch(
					reset('newReportForm')
					)
				window.location = '/listReport'                 //nao remova
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => {
			toastr.error('Erro!', 'Internal server error')
			dispatch({ type: LOAD, payload: false })
		})
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
