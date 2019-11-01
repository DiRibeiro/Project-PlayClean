import React from 'react'
import { useDispatch } from 'react-redux'

import FormLogin from './form/FormLogin'
import { login } from '../actions/authActions'

const Auth = () => {
    const dispatch = useDispatch()

    const handleForm = data => {
        dispatch(login(data))
    }

    return (
        <FormLogin onSubmit={ values => handleForm(values) } />
    )
}

export default Auth