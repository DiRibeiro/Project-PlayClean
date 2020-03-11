import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import BASE_URL from '../config/consts'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        axios
            .get(`${BASE_URL}/calendars?sort=-createdAt${search}`)
            .then(res => {
                dispatch({type: 'TODO_SEARCHED', payload: res})
            })
    }
}

export const add = (description) => dispatch => {
        axios
            .post(`${BASE_URL}/calendars`, { description })
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
        axios.put(`${BASE_URL}/${todo,index}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo, index) => {
    return dispatch => {
        axios.put(`${BASE_URL}/${todo,index}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${todo}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return (dispatch, getState) => {
        // const description = getState().todo.description
        axios
            .get(`${BASE_URL}/calendars`)
            .then(res => {
                dispatch({
                    type: 'TODO_CLEAR',
                    payload: ''
                })
            })
    }
}