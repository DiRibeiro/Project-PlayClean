import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FormRegisterUser from './form/FormRegisterUser'
import { signup } from '../actions/authActions'

const RegisterUser = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.personalInfo)

    const handleForm = values => {
        values['type'] = user.type
        dispatch(signup(values))
    }

    return (
        <FormRegisterUser 
            onSubmit={ values => handleForm(values)  }
            type={ user.type } />
    )
}

export default RegisterUser