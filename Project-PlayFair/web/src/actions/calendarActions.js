import axios from 'axios'
import BASE_URL from '../config/consts'

const CALENDAR_FETCHED = 'CALENDAR_FETCHED'

export const getCalendar = () => {
    return dispatch => {
        axios.get(`${BASE_URL}/calendar`)
            .then(response =>
                dispatch({
                    type: CALENDAR_FETCHED,
                    payload: response.data.result
                })
            )
            .catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}