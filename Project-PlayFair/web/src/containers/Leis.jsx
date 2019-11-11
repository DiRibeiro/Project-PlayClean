import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
// import { createTextMask } from 'redux-form-input-masks'
// import { DateTimePicker } from 'react-widgets'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'
// import Button from '../template/Button'

const Leis = (props) => {
    const { handleSubmit } = props
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])
        
    return (
        <form onSubmit={ handleSubmit } className="form-group" encType="multipart/form-data" >
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className='box-title'>Tipos de Lei</h3>
                    <a href='a' className='nav showLei' >Municipais</a>
                    <a href='a' className='nav showLei' >Estaduais</a>
                    <a href='a' className='nav showLei' >Federais</a>
                </div>
            </div>            
        </form>
    )
}

let LeisRepost = reduxForm({ form: 'newLei' })(Leis)   // A unique identifier for this form	

const selector = formValueSelector('newLei')
LeisRepost = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(LeisRepost)

export default LeisRepost