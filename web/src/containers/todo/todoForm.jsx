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
                <div className="box-body">
                    <div className='row'/* className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" */>
                        <div role='form' className='calendarForm'>
                            {/* <div className='calendar-input'> */}
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                <input 
                                    id='title' 
                                    className='form-control'
                                    placeholder='Título do Evento'
                                    onChange={this.props.changeTitle}
                                    onKeyUp={this.keyHandler}
                                    name='title'
                                    type='text'
                                    value={title}/>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                                <input 
                                    id='dateOcurr'
                                    className='form-control inputDate'
                                    onChange={this.props.changeDate}
                                    onKeyUp={this.keyHandler}
                                    name='dateOcurr'
                                    type='date'
                                    value={this.dateOcurr}
                                />
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                <textarea 
                                    id='description' 
                                    className='form-control textarea-input'
                                    placeholder='Descrição'
                                    onChange={this.props.changeDescription}
                                    onKeyUp={this.keyHandler}
                                    name='description'
                                    value={description}
                                    rows="4" cols="50"/>
                            </div>
                            {/* </div> */}
                        </div>
                </div>
                <div className='row'>
                    {/* <label 
                        htmlFor="select-document"
                        className='input-select'
                        ><i className="fa fa-file-text" aria-hidden="true"></i></label> */}
                    <input id="select-document"
                        className="input-select"
                        type="file" 
                        name="file" 
                        accept="image/png, image/jpeg" 
                        onChange={this.props.changeFile}
                        /* style={{display:'none'}} */
                        />
                </div>
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
        )
    }
}

const mapStateToProps = state => ({title: state.todo.title, description: state.todo.description, dateOcurr: state.todo.date, file: state.todo.file})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeTitle, changeFile, changeDescription, search, clear, changeDate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)