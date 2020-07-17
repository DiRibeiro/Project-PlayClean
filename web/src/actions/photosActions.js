import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import BASE_URL from '../config/consts'

const PHOTOS_FETCHED = 'PHOTOS_FETCHED'
const LOAD = 'LOAD'

export const getPhotos = () => {	
	return dispatch => {
		axios.get(`${ BASE_URL }/photos`)
		.then(result => {
			console.log(result)
			dispatch({ type: PHOTOS_FETCHED , payload: result.data })

		}).catch(err => {
			console.error(err)
		})
	}
}

export const postPhotos = (values) => dispatch => {
    
    dispatch({ type: LOAD, payload: true })
        
    axios
		 .post(`${BASE_URL}/photos`, values, {
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
				window.location = '/photos'                 //nao remova
				toastr.success('Sucesso!', 'Nova foto inserida com sucesso!')
			}
		})
		.catch(error => {
			toastr.error('Erro!', 'Internal server error')
			dispatch({ type: LOAD, payload: false })
		})
}