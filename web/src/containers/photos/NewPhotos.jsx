import React, { useEffect, useState } from 'react'
import {postPhotos, getPhotos} from '../../actions/photosActions'
import FormData from 'form-data'
import { useDispatch, useSelector } from 'react-redux'
import FormPhotos from './FormPhotos'
import Gallery from 'react-grid-gallery'

const Photos = (props) => {
    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const photosOnBackend = useSelector(state => state.photos.photo)
    
    const IMAGES = [{
        src: "http://localhost:3001/uploads/LogoAzul_FundoBranco-1592242728235.jpg",
        thumbnail: "http://localhost:3001/uploads/LogoAzul_FundoBranco-1592242728235.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174
    }]
	

    useEffect(() => {
        // console.log("BUSCANDO FOTOS")
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
        
        for (let key in values)
            if (values.hasOwnProperty(key))
                fd.append(key, values[key])

        setFiles({ images: [] })
        dispatch(postPhotos(fd))
    }

    
    return (
        <>
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Upload de fotos</h3>
                
                {renderImages}

                <div className="box-body">
                    <FormPhotos
                        handleSubmit={ values => handleForm(values) }
                        handleImage = { values => fileSelectedHandler(values) } 
                        photos={ files['images'] } />
                </div>
            </div>
        </div>
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Fotos</h3>
                    <Gallery images={IMAGES} />
            </div>
        </div>
        </>
    )    
}

export default Photos