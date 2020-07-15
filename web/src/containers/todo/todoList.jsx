import React, {useEffect} from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import { bindActionCreators} from 'redux'
import { remove, search } from '../../actions/calendarActions'
import { fullDate } from '../../helper/date'


import BASE_URL from '../../config/consts'

const TodoList = props => {
	const dispatch = useDispatch()
    const list = useSelector(state => state.todo.list) || undefined
	
    useEffect(() => {
		dispatch(search())
    }, [])
    
    const renderRows = () => {
        return list.map((todo, index) => (
            <tr key={index}>
                <td>{todo.title}</td>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className={todo.done ? 'markedAsDone' : ''}>{fullDate(todo.dateOcurr)}</td>
                <td><a href={`${BASE_URL}/${todo.image}`} target="_blank">LINK</a></td>
                <td>
                    {/* <button className='btn-success btn-add'
                        onClick={() => props.markAsDone(todo)}><i className="fa fa-check"></i></button>
                    <button className='btn-warning btn-search'
                        onClick={() => props.markAsPending(todo)}><i className="fa fa-undo"></i></button> */}
                    <button className='btn-danger btn-close'
                        onClick={() => props.remove()}><i className="fa fa-trash-o"></i></button>
                </td>
                
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Arquivo</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({/*  markAsDone, markAsPending, */ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)