import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeDescription, search, clear, changeDate/* , remove */ } from '../../actions/calendarActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    UNSAFE_componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description, dateOcurr } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description, dateOcurr)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, description, clear, dateOcurr} = this.props
        return (
            <div role='form' className='calendarForm'>
                <div className='calendar-input'>
                    <input 
                        id='description' 
                        className='form-control'
                        placeholder='Adicione um evento'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        name='description'
                        type='text'
                        value={description}/>
                    <input 
                        id='dateOcurr'
                        className='form-control inputDate'
                        onChange={this.props.changeDate}
                        onKeyUp={this.keyHandler}
                        name='dateOcurr'
                        type='date'
                        value={this.dateOcurr}
                    />

                <div className='btn-calendar'>
                    <button className='btn-success btn-add'
                        onClick={() => add(description, dateOcurr)}><i className="fa fa-plus" aria-hidden="true"/></button>
                    
                    <button className='btn-danger btn-close'
                        onClick={() => clear()}><i className="fa fa-close" aria-hidden="true"/></button>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description, dateOcurr: state.todo.date})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear, changeDate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)