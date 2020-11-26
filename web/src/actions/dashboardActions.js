import { toastr } from 'react-redux-toastr'
import BASE_URL from '../config/consts'
import axios from 'axios'

const DASHBOARD_FETCHED = "DASHBOARD_FETCHED"
const DASHBOARD_CT_FETCHED = "DASHBOARD_CT_FETCHED"
/* Connection with server here. Now fake data is returned */

export const getDashboardData = () => {
    return dispatch => {
        axios.get(`${BASE_URL}/dashboardReports`).then(response => {
            dispatch({
                type: DASHBOARD_FETCHED,
                payload: response.data
            })
    
        }).catch(error => {
            console.log(error)
            toastr.error('Erro!', 'Internal server error')
        })
    }

}

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