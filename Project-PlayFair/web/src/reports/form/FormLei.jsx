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
            <h4><b>Dados das leis municipais</b></h4>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="input-group">
                        {/* <span className="input-group-addon"><i className="fas fa-user"/></span> */}
                        <Field name="nameLei" component="input" type="text" placeholder="Escreva o nome da lei." className="form-control" />
                        <Field name="leiDrescription" component="textarea" type="text" placeholder="Descreva a lei." className="form-control" />
                    </div>
                    {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
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