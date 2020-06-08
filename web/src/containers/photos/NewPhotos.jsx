import React, { useState } from 'react'
import {postPhotos, changePhotos} from '../../actions/photosActions'
import FormData from 'form-data'
import { useDispatch } from 'react-redux'
import FormPhotos from './FormPhotos'

const Photos = (props) => {
    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const handleForm = (values) => {
        const fd = new FormData()

        if (files['images'] !== undefined)
            files['images'].forEach(img => fd.append('images', img))

        for (let key in values)
            if (values.hasOwnProperty(key))
                fd.append(key, values[key])

        setFiles({ images: [] })
        dispatch(postPhotos(fd))
    }

    return (
        <div className="box box-success">
            <div className="box-body">
                <FormPhotos
                    onSubmit={ values => handleForm(values) }
                    handleImage = { changePhotos } 
                    photos={ files['images'] } />
            </div>
        </div>
    )    
}

export default Photos