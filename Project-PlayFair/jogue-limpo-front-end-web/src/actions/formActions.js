import axios from 'axios'
import { getReports } from './reportActions'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab } from '../actions/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/formReport`)
    return {
        type: 'FORM_REPORT_FETCHED',
        payload: request
    }
}

export function create(values){
    return dispatch => {
        axios.post(`${BASE_URL}/formReport`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada.')
            dispatch([
                resetForm('Form'),
                getReports(),
                selectTab('tabList'),
                showTabs('*')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }

}

export function showUpdate(FormReport){
    return [
        showtabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('Form', FormReport)
    ]
}

export function init(){
    
}