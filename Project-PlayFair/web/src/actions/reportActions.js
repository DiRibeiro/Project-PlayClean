import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

export const getReports = () => {	
	return dispatch => {
		axios.get(`${ BASE_URL }/report`)
		.then(result => {
			//console.log(result)
			dispatch({ type: 'REPORTS_FETCHED', payload: result.data })

		}).catch(err => {
			console.error(err)
		})
	}
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
