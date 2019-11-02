import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const USER_FETCHED = 'USER_FETCHED'
const TOKEN_FETCHED = 'TOKEN_FETCHED'
const LOAD = 'LOAD'

export const tradeTokenToUser = token => {
    const tokenID = token ? token : axios.defaults.headers.common['authorization'] 

    return dispatch => {
        axios.post(`${ BASE_URL }/tradeTokenToUser`, tokenID)
            .then(response => {                                     
                if(response.status === 400)
                    toastr.error('Erro!', response)

                else if(response.status === 200)
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data
                    })
            }).catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}

export const updateToken = () => {
    return dispatch => {
        axios.get(`${ BASE_URL }/updateToken`)
            .then(response => {                                    
                if(response.status === 202)
                    toastr.error('Erro!', response.data)

                else if(response.status === 200) {
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data.result
                    })
                    dispatch({
                        type: TOKEN_FETCHED,
                        payload: response.data.token
                    })
                }     
            }).catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}

export const updateUser = values => {
    return dispatch => {
        dispatch({ type: LOAD, payload: true })
        axios.post(`${ BASE_URL }/updateUser`, values)
            .then(response => {                                     
                if(response.status === 202) {
                    toastr.error('Erro!', response.data)
                    dispatch({ type: LOAD, payload: false })
                } else if(response.status === 200) {
                    toastr.success('Sucesso!', 'Usuário atualizado com sucesso!')
                    
                    axios.defaults.headers.common['authorization'] = response.data.token
                    axios.defaults.headers.common['_id'] = response.data.result._id
                    
                    dispatch(reset('formChangeAccount'))

                    dispatch({
                        type: TOKEN_FETCHED,
                        payload: response.data.token
                    })

                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data.result
                    })

                    dispatch({ type: LOAD, payload: false })
                }     
            }).catch(error => {
                toastr.error('Erro!', 'Internal server error')
                dispatch({ type: LOAD, payload: false })
            })
    }
}