import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormLei from './form/FormLei'
import { postLeis } from '../actions/leisActions'

import FormData from 'form-data'

const Leis = () => {
    const dispatch = useDispatch()
    const [leis, setLeis]= useState({ type: [] })

    const handleForm = values => {
        // const fd = new FormData()

        // if (leis['type'] !== undefined)
        //     leis['type'].forEach(type => fd.append('type', type))

        // for (let key in values)
        //     if (values.hasOwnProperty(key))
        //         fd.append(key, values[key])

        // setLeis({ type: [] })
        dispatch(postLeis())
    }

    return (
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Cadastrar denúncia</h3>
            </div>
            <div className="box-body">
                <FormLei 
                    onSubmit={ values => handleForm(values) }
                    // type={ leis['type']}
                     />
            </div>
        </div>
    )
}

export default Leis