import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeTitle, changeFile, changeDescription, search, clear, changeDate/* , remove */ } from '../../actions/calendarActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.state = {} 	//file to upload
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
        const { title, add, description, clear, dateOcurr, file} = this.props
        return (
            <div className="box box-success">
                <div className="box-body listLeis">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <div role='form' className='calendarForm'>
                            <div className='calendar-input'>
                                <input 
                                    id='title' 
                                    className='form-control'
                                    placeholder='Título do Evento'
                                    onChange={this.props.changeTitle}
                                    onKeyUp={this.keyHandler}
                                    name='title'
                                    type='text'
                                    value={title}/>
                                <input 
                                    id='description' 
                                    className='form-control'
                                    placeholder='Descrição'
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
                                <input id="select-document"
                                            type="file" 
                                            name="file" 
                                            accept="image/png, image/jpeg" 
                                            onChange={this.props.changeFile}
                                            />
                            <div className='btn-calendar'>
                                <button className='btn-success btn-add'
                                    onClick={() => {
                                        console.log(file)
                                        add(title, description, dateOcurr, file);
                                    }}><i className="fa fa-plus" aria-hidden="true"/></button>
                                
                                <button className='btn-danger btn-close'
                                    onClick={() => clear()}><i className="fa fa-close" aria-hidden="true"/></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({title: state.todo.title, description: state.todo.description, dateOcurr: state.todo.date, file: state.todo.file})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeTitle, changeFile, changeDescription, search, clear, changeDate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)