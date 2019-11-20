import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const CATATRECO_FETCHED = 'CATATRECO_FETCHED'

export const getCataTreco = () => {
	return dispatch => {
		axios.get(`${BASE_URL}/cataTreco`)
			.then(response =>
				dispatch({
					type: CATATRECO_FETCHED,
					payload: response.data
				})
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postCataTreco = values => dispatch => {
	axios
		.post(`${BASE_URL}/cataTreco`, values)
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(reset('newCataTrecoForm'))
				window.location = '/listCataTreco'                 // dont forget to remove that fucking shit
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}
