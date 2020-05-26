import React from 'react'
import { useDispatch } from 'react-redux'
import FormCataTreco from './form/FormCataTreco'
import { postCataTreco } from '../actions/cataTrecoActions'

// import FormData from 'form-data'

const CataTreco = () => {
    const dispatch = useDispatch()

    const handleForm = (values) => {
        dispatch(postCataTreco(values))
    }

    return (
        <FormCataTreco
            onSubmit={ (values) => handleForm(values)} 
            />
    )
}

export default CataTreco