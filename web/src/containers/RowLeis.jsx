import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { Navigate } from 'react-router'
import BASE_URL from '../config/consts'
import {deleteLeis} from '../actions/leisActions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const RowLeis = (props) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    
    const lei = props.leis || props;
    let statusDom;

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const removeLeis = id => dispatch(deleteLeis(id));

    if (lei.status === 0) statusDom = (<button className="btn btn-success">Aberta</button>);
    else if (lei.status === 1) statusDom = (<button className="btn btn-dark">Fechada</button>);
    else if (lei.status === 2) statusDom = (<button className="btn btn-warning">Pendente</button>);

    return (
        <div className="box box-success">
            <div className="box-body listLeis">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <h3 className="box-title">{lei.title}</h3>
                    <span>Tipo de lei {lei.type}</span><br />
                    <p>{lei.description}</p>
                    <a href={BASE_URL + '/' + lei.file} target='_blank' rel='noopener noreferrer'>ARQUIVO</a>
                </div>
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
                        <DialogActions className='btn-dialog'>
                            <button className="btn btn-danger" onClick={handleClose}>
                                Não
                            </button>
                            <button className="btn btn-success" onClick={() => removeLeis(lei._id)} autoFocus>
                                Sim
                            </button>
                        </DialogActions>
                    </Dialog>
                </div>
                {statusDom}
            </div>
        </div>
    );
}

export default RowLeis;
