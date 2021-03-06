import React, {useEffect, useState} from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove, search, editTodo } from '../../actions/calendarActions'
import { fullDate, shortDateHTML } from '../../helper/date'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import BASE_URL from '../../config/consts'

const TodoList = props => {
	const dispatch = useDispatch()
    const list = useSelector(state => state.todo.list);
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
        dispatch(search())
    }, [])

    const removeCalendar = id => {
        dispatch(remove(id));
        setOpen(false);
    }

    const handleClickOpenUpdate = (index) => {
        setEdit(true);
        setIndex(index);
        
        const calendario = list[index];
        setNewTitle(calendario.title);
        setNewDescription(calendario.description);
        setDateValue(shortDateHTML(calendario.dateOcurr));
        setNewImage(calendario.image);
    };

    const handleCloseUpdate = () => {
        setEdit(false);
    };

    const removeDialogComponent = () => {

        const calendario = list[index];

        if (!calendario) return null;

        return (<Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{`Deseja apagar este evento (${calendario.title})?`}</DialogTitle>

            <DialogActions className='btn-dialog'>
                <button className="btn btn-danger" onClick={handleClose}>
                    Não
						</button>
                <button className="btn btn-success" onClick={() => removeCalendar(calendario._id)}>
                    Sim
						</button>
            </DialogActions>
        </Dialog>);
    }

    const [newTitle, setNewTitle] = useState();
    const [newDescription, setNewDescription] = useState();
    const [newImage, setNewImage] = useState();
    const [dateValue, setDateValue] = useState();

    const editDialogComponent = () => {
        const calendario = list[index];
        if(!calendario) return null;

        return (
            <div className='dialog-configure'>
                <Dialog
                    open={edit}
                    onClose={ handleCloseUpdate }
                    fullWidth={true}
                    maxWidth = {'md'}
                >
                    <div className="box-body" style={{margin: '20px'}}>
                        <div className="row">
                        <label>Título:</label>
                            <input 
                                style={{marginBottom: 2}}
                                id='title' 
                                className='form-control'
                                name='title'
                                type='text'
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)}
                            />
                        </div>
                        <div className="row">
                        <br/>
                            <label>Data atual do evento:</label>
                            <input 
                                id='dateOcurr'
                                className='form-control'
                                name='dateOcurr'
                                type='date'
                                value={dateValue}
                                onChange={e => setDateValue(e.target.value)}
                            />
                        </div>
                        <div className='row'>
                            <br/>
                        <label>Descrição:</label>
                            <textarea 
                                id='description' 
                                className='form-control textarea-input'
                                name='description'
                                rows="4" cols="50"
                                value={newDescription}
                                onChange={e => setNewDescription(e.target.value)}
                            />
                        </div>
                        {/* <div className='row'>
                            <input 
                                id="select-document"
                                className="input-select"
                                type="file" 
                                name="file" 
                                accept="image/*" 
                                value={newImage}
                                onChange={e => setNewImage(e.target.value)}
                                />
                        </div> */}
                    </div>
                    <DialogActions className='btn-dialog'>
                        <button className="btn btn-danger" onClick={handleCloseUpdate}>
                            Não
                        </button>
                        <button className="btn btn-success"
                            onClick={ () => { 
                                dispatch(editTodo(
                                    calendario._id,
                                    newTitle,
                                    newDescription,
                                    dateValue,
                                    newImage
                                ));
                                handleCloseUpdate();
                            }}>
                            Atualiza
                        </button>
                    </DialogActions>
                </Dialog>
            </div>
        );
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
							onClick={() => handleClickOpen(index)}>
							<i className='fa fa-trash-o'></i>
						</button>
                        {removeDialogComponent()}
                    </div>
                        <button 
                            style={{
                                float: 'none',
                                marginRight: '1px',
                            }}
							className="btn btn-primary btn-delete" 
							variant="outlined" 
							onClick={() => handleClickOpenUpdate(index)}>
							<i className='fa fa-pencil'></i>
						</button>
                        {editDialogComponent()}
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
    bindActionCreators({ remove, editTodo, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)