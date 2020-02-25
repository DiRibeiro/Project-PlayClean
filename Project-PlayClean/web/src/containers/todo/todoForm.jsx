import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import Grid from '../template/grid'
// import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from '../../actions/calendarActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    UNSAFE_componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='calendarForm'>
                <div className='calendar-input'>
                    <input id='description' className='form-control'
                        placeholder='Adicione um evento'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        name='description'></input>
                    {/* <input id='date' className='form-control inputDate'
                        type='date'
                        placeholder='00/00/0000'
                        name='dateCreate'></input> */}
                
                <div className='btn-calendar'>
                    <button className='btn-success btn-add'
                        onClick={() => add(description)}><i className="fa fa-plus" aria-hidden="true"/></button>
                    <button className='btn-info btn-search'
                        onClick={search}><i className="fa fa-search" aria-hidden="true"/></button>
                    <button className='btn-danger btn-close'
                        onClick={this.props.clear}><i className="fa fa-close" aria-hidden="true"/></button>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)