import React, { useEffect, useState } from 'react'
import {postPhotos, getPhotos} from '../../actions/photosActions'
import FormData from 'form-data'
import { useDispatch, useSelector } from 'react-redux'
import FormPhotos from './FormPhotos'
import BASE_URL from '../../config/consts'

import { makeStyles } from '../../../node_modules/@material-ui/core/styles';
import GridList from '../../../node_modules/@material-ui/core/GridList';
import GridListTile from '../../../node_modules/@material-ui/core/GridListTile';
import GridListTileBar from '../../../node_modules/@material-ui/core/GridListTileBar';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'end',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }));

const Photos = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const photosOnBackend = useSelector(state => state.photos.photo)
    
    const [title, setTitle] = useState('')

    useEffect(() => {
        console.log("BUSCANDO FOTOS")
        dispatch(getPhotos())
    }, [])


    const fileSelectedHandler = event => {
        let images = files['images']
        Object.values(event.target.files).map(picture => images.push(picture))
        setFiles({ images })
    }

    const handleForm = (values) => {
        const fd = new FormData()
        if (files['images'] !== undefined)
            files['images'].forEach(img => fd.append('images', img))
        fd.append('title', title)
        setFiles({ images: [] })
        dispatch(postPhotos(fd))
    }

    const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
    };
    
    const renderImages = () => {
        return photosOnBackend.map((element, index) =>
            <div key={index}>
                    <img
                    key={ index }
                    className=''
                    style={{ 
                        width: '150px',
                        borderRadius: '3px'
                    }} 
                    src={ `${BASE_URL}/${element.images}` } 
                    alt={`img galeria`} />
                {/* {console.log(element.title)} */}
                    <hr/>
            </div>)
        
    }
 
    return (
        <>
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Upload de fotos</h3>
                <div className="box-body">
                    <FormPhotos
                        titleHandle = {e => setTitle(e.target.value)}
                        handleSubmit={ values => handleForm(values) }
                        handleImage = { values => fileSelectedHandler(values) }
                        photos={ files['images'] } 
                    />
                </div>
            </div>
        </div>
        <div className="box box-success">
            <div className="box-header with-border">
                <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <h3 
                        key="Subheader"
                        cols={2}
                        className="box-title"
                        style={{     
                            width: '100%',
                            height: 0,
                            padding: '2px',
                            marginBottom: '2em',
                            textAlign: 'left',
                         }}
                        >Fotos</h3>
                    {photosOnBackend.map((element, index) => (
                    <GridListTile key={index}>
                        <img src={ `${BASE_URL}/${element.images[0]}` }
                        alt={`img galeria`}
                    />
                        <GridListTileBar
                            title={element.title}
                            onClick={handleClickOpen}
                            />      
                    </GridListTile>
                    ))}
                </GridList>
                </div>
                <Backdrop
                    className={classes.backdrop}
                    open={open}
                    onClick={handleClose}
                >
                    {renderImages()}
                </Backdrop>
            </div>
        </div>
        </>
      );
}

export default Photos


    
    // return (
    //     <>
    //     <div className="box box-success">
    //         <div className="box-header with-border">
    //             <h3 className="box-title">Upload de fotos</h3>
    //             <div className="box-body">
    //                 <FormPhotos
    //                     titleHandle = {e => setTitle(e.target.value)}
    //                     handleSubmit={ values => handleForm(values) }
    //                     handleImage = { values => fileSelectedHandler(values) } 
    //                     photos={ files['images'] } 
    //                 />
    //             </div>
    //         </div>
    //     </div>
    //     <div className="box box-success">
    //         <div className="box-header with-border">
    //             <h3 className="box-title">Fotos</h3>
    //             {renderImages()}
    //         </div>
    //     </div>
    //     </>
    // )   