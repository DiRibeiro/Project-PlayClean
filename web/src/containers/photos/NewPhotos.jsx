import React, { useEffect, useState } from 'react'
import {postPhotos, getPhotos} from '../../actions/photosActions'
import FormData from 'form-data'
import { useDispatch, useSelector } from 'react-redux'
import FormPhotos from './FormPhotos'

const Photos = (props) => {
    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const photosOnBackend = useSelector(state => state.photos.photos)

    useEffect(() => {
        console.log("BUSCANDO FOTOS")
        dispatch(getPhotos())
    }, [])


    const fileSelectedHandler = event => {
        let images = files['images']
        Object.values(event.target.files).map(picture => images.push(picture))
        setFiles({ images })
    }

    const renderImages = () =>
    photosOnBackend.map((element, index) =>
        <img
            key={ index }
            style={{ 
                clear: 'both',
                width: '200px',
                //height: '100px',
                margin: '0px 5px',
                marginTop: '-14px',
                borderRadius: '3px'
            }} 
            src={ URL.createObjectURL(element) } 
            alt="img galeria" />)


    const handleForm = (values) => {
        const fd = new FormData()

        if (files['images'] !== undefined)
            files['images'].forEach(img => fd.append('images', img))

        console.log(files.images)

        console.log("handle form")
        setFiles({ images: [] })
        dispatch(postPhotos(fd))
    }

    return (
        <div className="box box-success">
            <h1>Oi...</h1>
            
            {renderImages}

            <div className="box-body">
                <FormPhotos
                    handleSubmit={ values => handleForm(values) }
                    handleImage = { values => fileSelectedHandler(values) } 
                    photos={ files['images'] } />
            </div>
        </div>
    )    
}

export default Photos