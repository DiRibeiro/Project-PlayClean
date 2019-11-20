import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormReport from './form/FormReport'
import { postReport } from '../actions/reportActions'

import FormData from 'form-data'

const Report = () => {
    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const fileSelectedHandler = event => {
        let images = files['images']
        Object.values(event.target.files).map(picture => images.push(picture))
        setFiles({ images })
    }

    const handleForm = values => {
        const fd = new FormData()

        if (files['images'] !== undefined)
            files['images'].forEach(img => fd.append('images', img))

        for (let key in values)
            if (values.hasOwnProperty(key))
                fd.append(key, values[key])

        setFiles({ images: [] })
        dispatch(postReport(fd))
    }

    return (
        <div className="box box-primary">
            <div className="box-header with-border">
                <h3 className="box-title">Cadastrar denúncia</h3>
            </div>
            <div className="box-body">
                <FormReport 
                    onSubmit={ values => handleForm(values) }
                    handleImage = { values => fileSelectedHandler(values) } 
                    images={ files['images'] } />
            </div>
        </div>
    )
}

export default Report