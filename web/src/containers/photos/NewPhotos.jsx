import React, { useEffect, useState } from 'react'
import {postPhotos, getPhotos, getPhotosId, deleteGallery, deleteSingleImg} from '../../actions/photosActions'
import FormData from 'form-data'
import { useDispatch, useSelector } from 'react-redux'
import FormPhotos from './FormPhotos'
import BASE_URL from '../../config/consts'

import { makeStyles } from '../../../node_modules/@material-ui/core/styles';
import GridList from '../../../node_modules/@material-ui/core/GridList';
import GridListTile from '../../../node_modules/@material-ui/core/GridListTile';
import GridListTileBar from '../../../node_modules/@material-ui/core/GridListTileBar';
import Backdrop from '@material-ui/core/Backdrop';
import { Dialog, DialogActions } from '@material-ui/core'


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

    
    const menuStyle = {
        cursor: 'pointer',
        display: 'flex', 
        minWidth: '100px',
        maxWidth: '300px',
        fontSize: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }


    const classes = useStyles();

    const dispatch = useDispatch()
    const [files, setFiles] = useState({ images: [] })

    const photosOnBackend = useSelector(state => state.photos.photo)
    
    const [title, setTitle] = useState('');
    const [index, setIndex] = useState();
    const [internalIndex, setInternalIndex] = useState(0);
    const [open, setOpen] = useState(false);

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

    
	const handleClickOpen = (index) => {
       setOpen(!open);
       setIndex(index);
       setInternalIndex(0);
	};

	const handleClose = () => {
		setOpen(false);
    };


    const previousImage = (galleryIndex, imageIndex) => {

        const gallery = photosOnBackend[galleryIndex];

        if (imageIndex == 0) {
            setInternalIndex(gallery.images.length -1)
        } else {
            setInternalIndex(internalIndex -1);
        }

    }


    const nextImage = (galleryIndex, imageIndex) => {

        const gallery = photosOnBackend[galleryIndex];

        if (imageIndex == gallery.images.length -1) {
            setInternalIndex(0)
        } else {
            setInternalIndex(internalIndex +1);
        }
    }

    
    const removeGallery = () => {

        const gallery = photosOnBackend[index];
        dispatch(deleteGallery(gallery._id));
        handleClose();
    }


    const removeImage = () => {

        const gallery = photosOnBackend[index];
        dispatch(deleteSingleImg(gallery._id, internalIndex))

    }


    const galleryComponent = () => {

        const gallery = photosOnBackend[index];
        if (!gallery) return null;


        return (
            <div >
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    fullWidth={true}
                    maxWidth = {'md'}
                >

                    <div className="box-body" style={{margin: '20px'}}>
                        <div className="row" style={{marginBottom: '20px'}}>
                            <h2 style={{textAlign: 'center'}}>{gallery.title}</h2>
                            <h4 style={{textAlign: 'center'}}>Foto {internalIndex +1} de {gallery.images.length}</h4>
                        </div>
                        
                        
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={menuStyle} onClick={() => previousImage(index, internalIndex)}>
                                {`<<`}
                            </div>
                            <img 
                                style={{maxWidth : '700px'}}
                                src={ `${BASE_URL}/${gallery.images[internalIndex]}` }
                                alt={`img galeria`}
                                onClick={() =>  {handleClickOpen(index); }}
                            />
                            <div style={menuStyle} onClick={() => nextImage(index, internalIndex)}>
                                <h2>{`>>`}</h2>
                            </div>
                        </div>


                    </div>

                    <DialogActions className='btn-dialog' >
                        
                        <button className="btn btn-danger" onClick={() => removeGallery()} style={{width: 150}}>
                            Deletar Galeria
                        </button>
                        <button className="btn btn-warning" onClick={() => removeImage()} style={{width: 150}}>
                            Deletar Imagem
                        </button>
                        <button className="btn btn-success" style={{width: 150}}
                            onClick={() => handleClose()}>
                            Fechar
                        </button>
                    </DialogActions>

                </Dialog>
            </div >
        );
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
                        photos={ files } 
                        />
                </div>
            </div>
        </div>
        <div className="box box-success">
            <div className="box-header with-border">
                <div className={classes.root}>
                   
                <GridList cellHeight={150} cols={5} className={classes.gridList}>
                    {photosOnBackend.map((element, index) => (
                        <GridListTile key={element._id}>
                            <img 
                                src={ `${BASE_URL}/${element.images[0]}` }
                                alt={`img galeria`}
                                onClick={() =>  {handleClickOpen(index); }}
                            />
                            <GridListTileBar
                                title={element.title}
                            /> 
                        </GridListTile>
                    ))}
                </GridList>
                {galleryComponent()}
                </div>
                <Backdrop
                    className={classes.backdrop}
                    open={open}
                    onClick={handleClose}
                >
                </Backdrop>
            </div>
        </div>
        </>
      );
}

export default Photos

