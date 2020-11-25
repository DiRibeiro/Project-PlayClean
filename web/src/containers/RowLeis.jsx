import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
// import { Link } from 'react-router'
import BASE_URL from '../config/consts'
import {deleteLeis} from '../actions/leisActions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const RowLeis = props => {
    const renderDom = () => {
        const dispatch = useDispatch()
        let statusDom
        let lei = props.leis || props
    
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        if(lei.status === 0)
            statusDom = (<button className="btn btn-success">Aberta</button>)

        else if(lei.status === 1) 
            statusDom = (<button className="btn btn-dark">Fechada</button>)

        else if(lei.status === 2) 
            statusDom = (<button className="btn btn-warning">Pendente</button>)

        const removeLeis = id => {
            dispatch(deleteLeis(id));
        }
        
        return (
            <div className="box box-success">
                <div className="box-body listLeis">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ lei.title }</h3>
                        <span>Tipo de lei {lei.type}</span><br />
                        <p>{ lei.description }</p>
                        <a href={BASE_URL + '/' + lei.file} target='_blank' rel='noopener noreferrer'>ARQUIVO</a>
                    </div>
                    {/* <Link to={{ pathname: '/showDetailLeis', state: lei._id }} >
                        <button className="btn btn-primary bottomZero">Ver mais</button>
                    </Link> */}
                    <div className="btn-remove">
						<button 
							className="btn btn-danger btn-delete" 
							variant="outlined" 
							onClick={handleClickOpen}>
							<i className='fa fa-trash-o'></i>
						</button>
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">{"Deseja apagar esta lei?"}</DialogTitle>
							{/* <DialogContent>
							<DialogContentText id="alert-dialog-description">
								Você está prestes a deletar uma denúncia, gostaria de continuar?
							</DialogContentText>
							</DialogContent> */}
							<DialogActions className='btn-dialog'>
							<button className="btn btn-danger" onClick={handleClose}>
								Não
							</button>
							<button className="btn btn-success" onClick={ () => removeLeis(lei._id)} autoFocus>
								Sim
							</button>
							</DialogActions>
						</Dialog>
					</div>
                    { statusDom }
                </div>
            </div>
        )
    }
    
    return renderDom()
}

export default RowLeis