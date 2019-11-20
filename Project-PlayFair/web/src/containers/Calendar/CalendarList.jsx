import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending, remove } from '../../actions/calendarActions'

const CalendarList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(calendar => (
            <tr key={calendar._id}>
                <td className={calendar.done ? 'markedAsDone' : ''}>{calendar.description}</td>
                <td>
                    <button className='btn-success' icon='check' hide={calendar.done}
                        onClick={() => markAsDone(calendar)}></button>
                    <button className='btn-warning' icon='undo' hide={!calendar.done} 
                        onClick={() => markAsPending(calendar)}></button>
                    <button className='btn-danger' icon='trash-o' hide={!calendar.done} 
                        onClick={() => remove(calendar)}></button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.calendar.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CalendarList)