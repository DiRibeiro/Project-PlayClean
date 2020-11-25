import React, {useEffect, useState} from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove, search, update } from '../../actions/calendarActions'
import { fullDate } from '../../helper/date'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import BASE_URL from '../../config/consts'

const TodoList = props => {
	const dispatch = useDispatch()
    const list = useSelector(state => state.todo.list) || undefined
	
    useEffect(() => {
		dispatch(search(), update())
    }, [])

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeCalendar = id => {
        dispatch(remove(id), window.location = ('/calendar'));
    }

    const editCalendar = id => {
        // dispatch(update(id));
    }
    
    const renderRows = () => {
        return list.map((todo, index) => (
            <tr key={index}>
                <td>{todo.title}</td>
                <td className='tableDescription'>{todo.description}</td>
                <td className='tableDate'>{fullDate(todo.dateOcurr)}</td>
                <td className='tableFile'><a href={`${BASE_URL}/${todo.image}`} target="_blank" rel='noopener noreferrer'>LINK</a></td>
                <td className='tableActions'>
                    <div className="btn-remove">
                        <button 
                            style={{
                                float: 'none',
                                marginRight: '1px',
                            }}
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
							<DialogTitle id="alert-dialog-title">{"Deseja apagar este evento?"}</DialogTitle>
							{/* <DialogContent>
							<DialogContentText id="alert-dialog-description">
								Você está prestes a deletar uma denúncia, gostaria de continuar?
							</DialogContentText>
							</DialogContent> */}
							<DialogActions className='btn-dialog'>
							<button className="btn btn-danger" onClick={handleClose}>
								Não
							</button>
							<button className="btn btn-success" onClick={ () => removeCalendar(todo._id)} autoFocus>
								Sim
							</button>
							</DialogActions>
						</Dialog>
                        <button 
                            style={{
                                float: 'none',
                                marginRight: '1px',
                            }}
							className="btn btn-primary btn-delete" 
							variant="outlined" 
							onClick={() => dispatch(editCalendar(todo._id))}>
							<i className='fa fa-pencil'></i>
						</button>
					</div>
                </td>
                
            </tr>
        ))
    }

    return (
        <div className='box'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th className='tableDescription'>Descrição</th>
                        <th className='tableDate'>Data</th>
                        <th className='tableFile'>Arquivo</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({/*  markAsDone, markAsPending, */ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)