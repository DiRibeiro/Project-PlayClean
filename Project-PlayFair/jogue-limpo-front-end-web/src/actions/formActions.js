import axios from 'axios'
const BASE_URL = 'http://localhost:3003'

export function getList(){
    const request = axios.get(`${BASE_URL}/formReport`)
    return {
        type: 'FORM_REPORT_FETCHED',
        payload: request
    }
}