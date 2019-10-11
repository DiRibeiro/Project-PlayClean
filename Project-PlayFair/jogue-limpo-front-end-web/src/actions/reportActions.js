import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { showTabs, selectTab } from './tabActions'
import { reset as resetForm, initialize} from 'redux-form'

import BASE_URL from '../config/CONSTS'
const REPORTS_FETCHED = 'REPORTS_FETCHED'

export const getReports = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/report`)
            .then(response =>
                dispatch({
                    type: REPORTS_FETCHED,
                    payload: response.data.result
                })
            )
            .catch(error => toastr.error('Erro!', 'Internal server error'))
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
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
				dispatch(resetForm('Form'))
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}
/* export function create(values){
    axios.post(`${BASE_URL}/reports`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}  *//* 
export function create(values){
    return dispatch => {
        axios.post(`${BASE_URL}/reports`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada.')
            dispatch([
                resetForm('Form'),
                getReports(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }

} */

export function showUpdate(FormReport){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('Form', FormReport)
    ]
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