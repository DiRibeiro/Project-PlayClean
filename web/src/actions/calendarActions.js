import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import BASE_URL from '../config/consts'
import FormData from 'form-data'

export const changeTitle = event => ({
    type: 'TITLE_CHANGED',
    payload: event.target.value
})

export const changeFile = event => ({
    type: 'FILE_CHANGED',
    payload: event.target.files[0]
})

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

export const add = (title, description, dateOcurr, file) => dispatch => {
    console.log(file)
        const fd = new FormData();
        fd.append('image', file);
        fd.append('title', title);
        fd.append('description', description);

        let date = new Date(new Date(dateOcurr).getTime() + 12 * 3600 * 1000);

        fd.append('dateOcurr', date);
        axios
            .post(`${BASE_URL}/calendars`, fd, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(response => {
                if (response.status === 400) {
                    toastr.error('Erro!', response)
                }   
                else if (response.status === 200) {
                    //window.location = '/calendar'
                    dispatch(search());
                    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
                }
            }).catch(error => {
                toastr.error('Erro!', 'Internal server error')
            })
}

export const remove = _id => {	
    return async dispatch => {
        await axios.delete(`${BASE_URL}/calendars/${_id}`)
		.then(result => {
		    dispatch(search());
		}).catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const editTodo = (_id, title, description, dateOcurr, image) => { 
	return async dispatch => {
        await axios
            .post(`${BASE_URL}/calendarsUpdate`,
                {_id, title, description, dateOcurr, image})
            .then(result => {
                toastr.success('Sucesso!', 'Registro editado com sucesso!')
                dispatch(search());
            }).catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const clear = ( ) => {
    return async dispatch => {
        await axios
            .get(`${BASE_URL}/calendars`)
            .then(response => {
                dispatch({
                    type: 'TODO_CLEAR',
                    payload: ''
                })
            })
    }
}