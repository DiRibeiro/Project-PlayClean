import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

export const getLeis = () => {	
	return dispatch => {
		axios.get(`${ BASE_URL }/leis`)
		.then(result => {
			console.log(result)
			dispatch({ type: 'LEIS_FETCHED', payload: result.data })

		}).catch(err => {
			console.error(err)
		})
	}
}

export const postLeis = values => dispatch => {
	axios
		.post(`${BASE_URL}/leis`, values)
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(reset('newLeisForm'))
				window.location = '/listLeis'                 // dont forget to remove that fucking shit
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}
