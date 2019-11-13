import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

const Form = props => {
    const { handleSubmit } = props
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])
        
    return (
        <form onSubmit={ handleSubmit } className="form-group">
            {/* Information about what whistleblower */}
            <div className='tabContent'>
                <h5><b>Dados das leis { props.label }</b></h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label></label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fas fa-signature"/></span>
                            <Field name="nameLei" component="input" type="text" placeholder="Artigo da lei" className="form-control" />
                        </div>
                        {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                    </div>
                    
                    <div className="col-md-12">
                        <label>Descrição da lei</label>
                        <div className="input-group">
                            <Field name="descriptionLei" component="textarea" type="text" placeholder="Descrição da lei" className="form-control" />
                        </div>
                        {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                    </div>
                </div>
            </div>
        </form>
    )
}

let FormLei = reduxForm({ form: 'newReportForm' })(Form)   // A unique identifier for this form	

const selector = formValueSelector('newReportForm')
FormLei = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(FormLei)

export default FormLei