import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'
import Button from '../../template/Button'


import 'react-widgets/dist/css/react-widgets.css'

const Form = props => {
    const { handleSubmit } = props
    const utils = useSelector(state => state.utils)
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])
        
    // myHandleSubmit = values => {

    //     values = {
    //         nameLei: 'LEI 1'
    //     }

    //     values['type'] = props.label     

    //     values = {
    //         nameLei: 'LEI 1',
    //         type: 'Municipio'
    //     }

    //     dispatch(db(values))
    // }

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
                </div>
                <div className='row'>    
                    <div className="col-md-6">
                        <label>Descrição da lei</label>
                            <Field name="descriptionLei" row='6' component="textarea" type="text" placeholder="Descreva da lei" className="form-control" />
                            {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                    </div>
                </div>
                <div className="box-footer">
                    <Button 
                    label='Salvar'
                    loading={ utils.loading } />
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