import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from 'react-loader-spinner'

// import RowReport from '../containers/RowReport'
import { getColeta, deleteColeta } from '../../actions/coletaActions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ListColetas = () => {
	const dispatch = useDispatch()
	const allColetas = useSelector(state => state.coleta.coleta)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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

    const renderColetas = () => {
        return allColetas.map(coleta => (
            <tr key={coleta._id}>
                <td>{coleta.neighborhood}</td>
                <td>{coleta.type === 'organica' ? 'Orgânica' : 'Seletiva' || 'seletiva'}</td>
                <td>{coleta.description}</td>
                <td>
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
							<DialogTitle id="alert-dialog-title">{"Deseja apagar esta coleta?"}</DialogTitle>
							{/* <DialogContent>
							<DialogContentText id="alert-dialog-description">
								Você está prestes a deletar uma denúncia, gostaria de continuar?
							</DialogContentText>
							</DialogContent> */}
							<DialogActions className='btn-dialog'>
							<button className="btn btn-danger" onClick={handleClose}>
								Não
							</button>
							<button className="btn btn-success" onClick={ () => dispatch(removeColeta(coleta._id), window.location='/listColetas')} autoFocus>
								Sim
							</button>
							</DialogActions>
						</Dialog>
					</div>
                </td>
            </tr>
        ));
    }

	return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Bairro</th>
                    <th>Tipo de Coleta</th>
                    <th>Dia e Turno</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderColetas()}
            </tbody>
        </table>
	)
}

export default ListColetas