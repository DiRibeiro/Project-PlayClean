import axios from 'axios'

const BASE_URL = './config/consts'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().calendar.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${BASE_URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'CALENDAR_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(BASE_URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (calendar) => {
    return dispatch => {
        axios.put(`${BASE_URL}/${calendar._id}`, { ...calendar, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (calendar) => {
    return dispatch => {
        axios.put(`${BASE_URL}/${calendar._id}`, { ...calendar, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (calendar) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${calendar._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'CALENDAR_CLEAR' }, search()]
}
