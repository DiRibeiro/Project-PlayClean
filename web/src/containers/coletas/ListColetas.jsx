import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from 'react-loader-spinner'

// import RowReport from '../containers/RowReport'
import { getColeta, deleteColeta, editColeta } from '../../actions/coletaActions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const ListColetas = (props) => {
    const dispatch = useDispatch();
    const allColetas = useSelector(state => state.coleta.coleta);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState();
    const [edit, setEdit] = useState(false);

    const handleClickOpen = (index) => {
        setOpen(true);
        setIndex(index);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getColeta())
    }, [])

    const removeColeta = id => {
        dispatch(deleteColeta(id));
    }

    const handleUpdateOpen = (index) => {
        setEdit(true);
        setIndex(index);
        console.log(allColetas[index])

        const coleta = allColetas[index];
        setNewOrganicText(coleta.organic);
        setNewSelectiveText(coleta.selective);
    };

    const handleUpdateClose = () => {
        setEdit(false);
    };


    const removeDialogComponent = () => {

        const coleta = allColetas[index];

        if (!coleta) return null;

        return (<Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{`Deseja apagar esta coleta (${coleta.neighborhood})?`}</DialogTitle>

            <DialogActions className='btn-dialog'>
                <button className="btn btn-danger" onClick={handleClose}>
                    Não
						</button>
                <button className="btn btn-success" onClick={() => removeColeta(coleta._id)}>
                    Sim
						</button>
            </DialogActions>
        </Dialog>);
    }


    const [newOrganicText, setNewOrganicText] = useState();
    const [newSelectiveText, setNewSelectiveText] = useState();

    const editDialogComponent = () => {

        const coleta = allColetas[index];
        if (!coleta) return null;


        return (
            <div >
                <Dialog
                    open={edit}
                    onClose={handleUpdateClose}
                    fullWidth={true}
                    maxWidth = {'md'}
                >

                    <div className="box-body" style={{margin: '20px'}}>
                        <div className="row">

                            <label>Bairro</label>
                            <p>{coleta.neighborhood}</p>
                            <br></br>
                        </div>
                        <div className="row">

                            <label>Descrição Coleta Orgânica</label>
                            <textarea name='organic' className="form-control" value={newOrganicText} onChange={e => setNewOrganicText(e.target.value)} style={{ height: 100 }} />
                            <br />
                            <label>Descrição Coleta Seletiva</label>
                            <textarea name='selective' className="form-control" value={newSelectiveText} onChange={e => setNewSelectiveText(e.target.value)} style={{ height: 100 }} />
                        </div>
                    </div>

                    <DialogActions className='btn-dialog'>
                        <button className="btn btn-danger" onClick={handleUpdateClose}>
                            Cancelar
                        </button>
                        <button className="btn btn-success"
                            onClick={() => { 
                                    dispatch(editColeta(
                                    coleta._id,
                                    coleta.neighborhood,
                                    newOrganicText,
                                    newSelectiveText,
                                    ));
                                    handleUpdateClose();
                                }}>
                            Atualizar
                        </button>
                    </DialogActions>

                </Dialog>
            </div >
        );
    }


    const renderColetas = () => {
        return allColetas.map((coleta, index) => (
            <tr
                className='trColetas'
                key={index}>

                <td>{coleta.neighborhood}</td>

                <td>{coleta.organic}</td>

                <td>{coleta.selective}</td>

                <td>
                    <div className="btn-remove">
                        <button
                            className="btn btn-danger btn-delete"
                            variant="outlined"
                            onClick={() => handleClickOpen(index)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                        {removeDialogComponent()}
                    </div>
                    <button
                        className="btn btn-primary btn-delete"
                        variant="outlined"
                        onClick={() => handleUpdateOpen(index)}
                    >
                        <i className='fa fa-pencil'></i>
                    </button>
                    {editDialogComponent()}
                </td>
            </tr>
        ));
    }

    return (
        <div className="box box-success">
            <div className="box-header with-border">
            </div>
            <div className="box-body">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Bairro</th>
                            <th>Descrição Orgânica</th>
                            <th>Descrição Seletiva</th>
                            <th className='tableActions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderColetas()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListColetas