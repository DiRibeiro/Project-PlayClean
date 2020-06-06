import React from 'react'
import {postPhotos, changePhotos} from '../actions/photosActions'
import FormData from 'form-data'
import { useDispatch } from 'react-redux'

const Photo = () => {
    const dispatch = useDispatch()

    const state = {
        selectedFile: null
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('photos', state.selectedFile)
        dispatch(
            postPhotos(fd)
        )
    }
        return(
            <div className="row">
                <div className="col-md-6">
                    <input type='file' onChange={changePhotos} />
                    <button onClick={ fileUploadHandler }>Upload</button>                
                </div>
            </div>
        )
    
}

export default Photo