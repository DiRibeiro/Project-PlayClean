import Axios from 'axios'
//import { toastr } from 'react-redux-toastr'

const REPORTS_FETCHED = 'REPORTS_FETCHED'
const BASE_URL = 'http://localhost:3001'

export const getReports = () => {
    return dispatch => {
        fetch(`${ BASE_URL }/getReport`, {
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
