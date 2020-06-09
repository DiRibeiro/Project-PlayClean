import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {getPhotos} from '../../actions/photosActions'

import 'react-widgets/dist/css/react-widgets.css'

const FormPhotos = props => {
    const { handleSubmit, handleImage } = props
    const dispatch = useDispatch()
    const [files] = useState(props.photos)

    const renderImages = () =>
        files.map((element, index) =>
            <img
                key={ index }
                style={{ 
                    clear: 'both',
                    width: '100px',
                    height: '100px',
                    margin: '0px 5px',
                    marginTop: '-14px',
                    borderRadius: '3px'
                }} 
                src={ URL.createObjectURL(element) } 
                alt="img photos" />)
        
    return (
        <form onSubmit={ handleSubmit } className="form-group" encType="multipart/form-data" >
            {/* Information about what whistleblower */}
            <h4><b>Upload de fotos</b></h4>
            <div className="row">
                { renderImages() }
                
                <label 
                    htmlFor="select-pictures"
                    style={{
                        clear: 'both',
                        width: '100px', 
                        height: '100px',
                        margin: '5px',
                        backgroundColor: '#00a65a',
                        color: '#fff',
                        border: 'none',
                        // display: 'inline-block',
                        borderRadius: '3px',
                        padding: '28px 35px',
                        fontSize: '32px',
                        cursor: 'pointer',
                    }} ><i className="fas fa-photo"></i></label>
                
                <h5 className="description">*Insira imagens</h5>
                <input id="select-pictures"
                    type="file" 
                    name="images" 
                    accept="image/png, image/jpeg" 
                    onChange={ handleImage } 
                    multiple 
                    style={{ display: 'none' }} />
                <div className="box-footer">
                    <button
                        type='submit'
                        className='btn btn-success btnLogin'
                        //onClick={() => { dispatch(window.location = '/photos')}}
                        >Cadastrar</button>
                </div>
            </div>
        </form>
    )
}

export default FormPhotos