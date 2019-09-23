import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const REPORTS_FETCHED = 'REPORTS_FETCHED'
const BASE_URL = 'http://localhost:3003/api'

export const getReports = () => {
    return dispatch => {
        fetch(`${ BASE_URL }/reports`, {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            response.json()
                .then(result => {
                    return dispatch({
                        type: REPORTS_FETCHED,
                        payload: result
                    })
                }
            );
        }).catch(error => console.log(error))
    }
}

export function create(values){
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
    /* return dispatch => {
        fetch(`${ BASE_URL }/reports`, {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            response.json()
                .then(result => {
                    return dispatch({
                        type: REPORTS_FETCHED,
                        payload: result
                    })
                }
            );
        }).catch(error => console.log(error))
    } */
}