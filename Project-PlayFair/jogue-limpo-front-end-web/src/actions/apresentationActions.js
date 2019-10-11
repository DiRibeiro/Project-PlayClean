import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import BASE_URL from '../config/CONSTS'
const APRESENTATION_FETCHED = 'APRESENTATION_FETCHED'

export const getApresentation = () => {
    return dispatch => {
        fetch(`${ BASE_URL }/apresentations`, {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            response.json()
                .then(result => {
                    return dispatch({
                        type: APRESENTATION_FETCHED,
                        payload: result
                    })
                }
            );
        }).catch(error => console.log(error))
    }
}

export function postApresentation(apresentation){

    axios.post(`${BASE_URL}/apresentations`, apresentation )
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}