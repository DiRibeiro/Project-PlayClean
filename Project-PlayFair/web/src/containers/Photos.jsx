import React, { useState } from 'react';
import Gallery from 'react-grid-gallery'
import { Field } from 'redux-form'

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: ""
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

const Photo = props => {
    const {handleImage} = props
    const [files] = useState(props.images)
    const renderImages = () => {
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
                alt="img report" />
        )
    }

    return(
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
                        }} ><i className="fas fa-photo"></i></label>                    

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
            <Gallery images={IMAGES}/>

        </div>
        </div>
        
    )
}

export default Photo