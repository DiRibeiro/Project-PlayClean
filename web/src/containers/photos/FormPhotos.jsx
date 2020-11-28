import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
// import { useDispatch } from 'react-redux'

import 'react-widgets/dist/css/react-widgets.css'

let FormPhotos = props => {
    // const dispatch = useDispatch()
    const { handleSubmit, handleImage } = props
    const [files, setFiles] = useState(props.photos)
    
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
        <form onSubmit={(values) => { handleSubmit(values); setFiles([])  }} className="form-group" encType="multipart/form-data">
            
            <div className="row">
                <label>Título do conjunto de imagens</label>
                <Field name="title" component="input" type="text" placeholder="Título" className="form-control" onChange={props.titleHandle} />
                
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

FormPhotos = reduxForm({ form: 'newFormPhotos' })(FormPhotos) 
export default FormPhotos