import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'
const LEIS_FETCHED = 'LEIS_FETCHED'

export const getLeis = () => {	
	return dispatch => {
		axios.get(`${BASE_URL}/leis`)
		.then(result => {
			dispatch({ 
				type: LEIS_FETCHED, 
				payload: result.data
			})
		}).catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postLeis = (values, router) => {

    return dispatch => {
     console.log("POSTING LAWS") //percei que isso nunca era chamado!!!
    
	axios
		.post(`${BASE_URL}/leis`, values, {
            headers: {
				'content-type': 'multipart/form-data'
			}
        })
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
                dispatch(reset('newLeisForm'))
                //window.location = '/listLeis'
                router.push('/listLeis')            
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
        .catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}