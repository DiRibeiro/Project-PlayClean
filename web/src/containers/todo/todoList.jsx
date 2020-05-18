import React from 'react'
import { useSelector, connect } from 'react-redux'
import { bindActionCreators} from 'redux'
// import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from '../../actions/calendarActions'

const TodoList = props => {

    const renderRows = () => {
        const list = useSelector(state => state.todo.list) || []
        return list.map((todo, index) => (
            <tr key={index}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>{todo.dateOcurr}</td>
                <td>
                    <button className='btn-success btn-add' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}><i className="fa fa-check"></i></button>
                    <button className='btn-warning btn-search' hide={!todo.done} 
                        onClick={() => props.markAsPending(todo)}><i className="fa fa-undo"></i></button>
                    <button className='btn-danger btn-close' hide={!todo.done}
                        onClick={() => props.remove()}><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Data</th>
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
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)