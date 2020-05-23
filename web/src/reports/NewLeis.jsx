import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormLei from './form/FormLei'
import { postLeis } from '../actions/leisActions'

import FormData from 'form-data'

const Leis = () => {
    const dispatch = useDispatch()
    const [leis, setLeis]= useState({ type: [] })

    const handleForm = values => {
        dispatch(postLeis())
    }

    return (
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Cadastrar denúncia</h3>
            </div>
            <div className="box-body">
                <FormLei 
                    onSubmit={ (values) => handleForm(values) }
                    />
            </div>
        </div>
    )
}

export default Leis