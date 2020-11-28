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
// import ListSubheader from '../../../node_modules/@material-ui/core/ListSubheader';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'end',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 'auto',
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
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

    const renderImages = () => {
        return photosOnBackend.map((element, index) =>
            <div className=''>
                <h2 style={{textAlign: "left", marginTop: 20}}>{element.title}</h2>
                    <img
                    key={ index }
                    className=''
                    style={{ 
                        width: '150px',
                        borderRadius: '3px'
                    }} 
                    src={ `${BASE_URL}/${element.images}` } 
                    alt={`img galeria`} />
                {console.log(element.images)}
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
                            margin: '0px',
                            textAlign: 'left',
                         }}
                        >Fotos</h3>
                    {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Fotos</ListSubheader>
                    </GridListTile> */}
                    {photosOnBackend.map((element, index) => (
                    <GridListTile key={index}>
                        <img src={ `${BASE_URL}/${element.images[0]}` }
                        alt={`img galeria`}
                    />
                        <GridListTileBar
                            title={element.title}
                        //   subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton 
                                    aria-label={`info about ${element.title}`}
                                    className={classes.icon}
                                    onClick={() => renderImages()}
                                    >
                                    <i className='fa fa-info-circle'/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                    ))}
                </GridList>
                </div>
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