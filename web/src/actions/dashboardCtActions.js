import { toastr } from 'react-redux-toastr'
import BASE_URL from '../config/consts'
import axios from 'axios'

const DASHBOARD_CT_FETCHED = "DASHBOARD_CT_FETCHED"

export const getDashboardCtData = () => {
    return dispatch => {
        axios.get(`${BASE_URL}/dashboardCataTreco`).then(response => {
            dispatch({
                type: DASHBOARD_CT_FETCHED,
                payload: response.data
            })
    
        }).catch(error => {
            console.log(error)
            toastr.error('Erro!', 'Internal server error')
        })
    }

}