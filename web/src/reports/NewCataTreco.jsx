import React from 'react'
import { useDispatch } from 'react-redux'
import FormCataTreco from './form/FormCataTreco'
import { postCataTreco } from '../actions/cataTrecoActions'

const CataTreco = (props) => {
    const dispatch = useDispatch()

    const handleForm = (values) => {
        dispatch(postCataTreco(values, props.router))
    }

    return (
        <FormCataTreco
            onSubmit={ (values) => handleForm(values)} 
            />
    )
}

export default CataTreco