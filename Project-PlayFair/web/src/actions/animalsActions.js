import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const ANIMALS_ADOPTION_FETCHED = 'ANIMALS_ADOPTION_FETCHED'
const LOAD = 'LOAD'

export const getListAdoption = () => {
    return dispatch => {
        axios.get(`${ BASE_URL }/animalAdoption`)
        .then(response =>
            dispatch({
                type: ANIMALS_ADOPTION_FETCHED,
                payload: response.data.result
            })
        ).catch(error => console.log(error))
    }
}

export const postAnimalAdoption = values => {
    return dispatch => {
        dispatch({ type: LOAD, payload: true })
        axios.post(`${ BASE_URL }/animalAdoption`, values)
            .then(response => {                                     
                if(response.status === 202) {
                    toastr.error('Erro!', response)
                    dispatch({ type: LOAD, payload: false })

                } else if(response.status === 200) {
                    dispatch({ type: LOAD, payload: false })
                    dispatch(reset('newAnimalForm'))
                    window.location = '/listAnimal'                 // dont forget to remove that fucking shit
                    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
                }     
            }).catch(error => {
                toastr.error('Erro!', 'Internal server error')
                dispatch({ type: LOAD, payload: false })
            })
    }
}

export const setStatus = status => {
    return dispatch => {
        axios.post(`${ BASE_URL }/animalStatus`, status)
        .then(response => {
            if(response.status === 202)
                toastr.error('Erro!', response)
            
            else if(response.status === 200) {
                toastr.success('Sucesso!', 'Registro atualizado com sucesso!')
                dispatch(getListAdoption())
            }
        }).catch(error => toastr.error('Erro!', 'Internal server error'))
    }
}