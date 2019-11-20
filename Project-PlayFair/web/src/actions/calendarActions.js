import axios from 'axios'
import toastr from 'react-redux-toastr'

const BASE_URL = '../config/consts'

const CALENDAR_FETCHED = 'CALENDAR_FETCHED'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

// export const search = () => {
//     return (dispatch, getState) => {
//         const description = getState().calendar.description
//         const search = description ? `&description__regex=/${description}/` : ''
//         const request = axios.get(`${BASE_URL}?sort=-dateCreate${search}`)
//             .then(resp => dispatch({type: 'CALENDAR_SEARCHED', payload: resp.data}))
//     }
// }

export const add = (description) => {
	return dispatch => {
		axios
			.post(`${BASE_URL}/calendar`, description)
			.then(response => {
				if (response.status === 400) 
                    toastr.error('Erro!', response)
                else if (response.status === 200) {
                    dispatch({
                        type: CALENDAR_FETCHED,
                        payload: response.data.result
                    })
                }
            })
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const markAsDone = (calendar) => {
    return dispatch => {
        axios.put(`${BASE_URL}/${calendar._id}`, { ...calendar, done: true })
            .then(resp => dispatch(/* search() */))
    }
}

export const markAsPending = (calendar) => {
    return dispatch => {
        axios.put(`${BASE_URL}/${calendar._id}`, { ...calendar, done: false })
            .then(resp => dispatch(/* search() */))
    }
}

export const remove = (calendar) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${calendar._id}`)
            .then(resp => dispatch(/* search() */))
    }
}

export const clear = () => {
    return [{ type: 'CALENDAR_CLEAR' }/* , search() */]
}
