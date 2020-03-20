import React from 'react'

const ColetaOrganica = props => {
    const {handleImage} = props

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                        <label 
                            htmlFor='select-pictures'
                            style={{ 
                                clear: 'both',
                                width: '100px',
                                heigth: '100px',
                                margin: '5px',
                                backgroundColor: '#00a65a',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '3px',
                                padding: '28px 35px',
                                fontSize: '32px',
                                cursor: 'pointer',
                            }} ><i className="fas fa-plus"></i></label>                    

                        <h5 className="description">*Insira um arquivo.</h5>
                            <input id="select-pictures"
                                type="file" 
                                name="images" 
                                accept="image/png, image/jpeg" 
                                onChange={ handleImage } 
                                multiple 
                                style={{ display: 'none' }} />
                                    
                </div>
            </div>
            
            <div className='col-md-12'>
                {/* {renderImages()} */}

            </div>
        </div>
    )
}

export default ColetaOrganica