import React from 'react';
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
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: ""
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
 

export default props => (
    <>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group"> 
                <Field action="upload" name="images" accept="image/png, image/jpeg"  enctype="multipart/form-data" />
                <button 
                        type="submit" 
                        /*disabled={pristine || submitting} 
                        onSubmit={() => {
                            this.props.selectTab('tabList')
                            this.props.resetForm('FormReport')
                            }
                        } */
                        className='btn btn-success'>
                            <i className='fa fa-save'/> Salvar</button >
            </div>
        </div>
        </div>
        <Gallery images={IMAGES}/>
    </>
) 
