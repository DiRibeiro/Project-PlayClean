import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../../template/Button'
import { add, changeDescription, search, clear } from '../../actions/calendarActions'

class CalendarForm extends Component {
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
                <div className=''>
                    <input id='description' className='form-control'
                        placeholder='Adicione um evento'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </div>
                <div className=''>
                    <Button style='primary' icon='plus'
                        onClick={() => add(description)}></Button>
                    <Button style='info' icon='search'
                        onClick={search}></Button>
                    <Button style='default' icon='close'
                        onClick={this.props.clear}></Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.calendar.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm)