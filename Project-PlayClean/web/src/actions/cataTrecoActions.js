import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

export const getCataTreco = () => {
	return dispatch => {
		axios.get(`${BASE_URL}/cataTreco`)
			.then(result =>
				dispatch({
					type: 'CATATRECO_FETCHED',
					payload: result.data
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

export const setStatus = (status, _id) => {
	return dispatch => {
		axios
			.post(`${BASE_URL}/cataTrecoStatus`, { status, _id })
			.then(response => {
				if (response.status === 202) toastr.error('Erro!', response)
				else if (response.status === 200) {
					toastr.success(
						'Sucesso!',
						'Registro atualizado com sucesso!'
					)
					dispatch(getCataTreco())
				}
			})
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}