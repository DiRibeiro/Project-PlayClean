import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'
const COLETA_FETCHED = 'COLETA_FETCHED'

export const getColeta = () => {	
	return dispatch => {
		axios.get(`${BASE_URL}/coleta`)
		.then(result => {
			dispatch({ 
				type: COLETA_FETCHED, 
				payload: result.data
			})
		}).catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postColeta = values => {
    
    return dispatch => {
    
	axios
		.post(`${BASE_URL}/coleta`, values)
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(
					reset('newColetaForm'),
					)
                toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
                
                dispatch(getColeta());
			}
		})
        .catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}

export const deleteColeta = id => {	
	return dispatch => {
		axios.delete(`${BASE_URL}/coleta/${id}`)
		.then(result => {
			dispatch(getColeta());
		}).catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}
