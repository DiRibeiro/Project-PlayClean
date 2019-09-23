import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/formReport`)
    return {
        type: 'FORM_REPORT_FETCHED',
        payload: request
    }
}

export function create(values){
    axios.post(`${BASE_URL}/formReport`, values)
    return {
        type: 'TEMP'
    }

}