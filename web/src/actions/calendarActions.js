import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import BASE_URL from '../config/consts'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const changeDate = event => ({
    type: 'DATE_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/calendars`)
            .then(res => {
                console.log(res)
                dispatch({type: 'TODO_SEARCHED', payload: res})
            })
    }
}

export const add = (description, dateOcurr) => dispatch => {
        axios
            .post(`${BASE_URL}/calendars`, { description, dateOcurr })
            .then(response => {
                if (response.status === 400) {
                    toastr.error('Erro!', response)
                }   
                else if (response.status === 200) {
                    window.location = '/calendar'
                    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
                }
            }).catch(error => {
                toastr.error('Erro!', 'Internal server error')
            })
}

export const markAsDone = (todo, index) => {
    return dispatch => {
        axios.put(`${BASE_URL}/calendars?:_id`, { ...todo, done: true })
            .then(res => dispatch(search()))
    }
}

export const markAsPending = (todo, index) => {
    return dispatch => {
        axios.put(`${BASE_URL}/calendars?:_id`, /* { todo, done: false } */)
            .then(res => dispatch(search()))
    }
}

export const remove = ( description, dateOcurr ) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/calendars`, { description, dateOcurr })
        .then(response => {
            if (response.status === 400) {
                toastr.error('Erro!', response)
            }   
            else if (response.status === 200) {
                window.location = '/calendar'
                toastr.success('Sucesso!', 'Registro deletado!')
            }
        }).catch(error => {
            toastr.error('Erro!', 'Internal server error')
        })
    }
}

export const clear = ( ) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/calendars`)
            .then(response => {
                dispatch({
                    type: 'TODO_CLEAR',
                    payload: ''
                })
            })
    }
}