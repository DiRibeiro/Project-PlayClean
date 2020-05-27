import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Field, reduxForm, formValueSelector, } from 'redux-form'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

const Form = props => {
    const { handleSubmit } = props
    const dispatch = useDispatch()
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])
        
    return (
        <form onSubmit={ handleSubmit } className="form-group">
            {/* Information about what whistleblower */}
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title">Informe a lei</h3>
                </div>  
                <div className="box-body">
                        {/* <h5><b>Dados das leis municipais</b></h5> */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Artigo da lei</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fas fa-signature"/></span>
                                    <Field name="name" component="input" type="text" placeholder="Artigo da lei" className="form-control" />
                                </div>
                                {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Tipo de lei</label>
                                <div className="input-group">
                                    {/* <span className="input-group-addon"><i className="fas fa-signature"/></span> */}
                                    <Field name='typeLei' component="select" className="form-control select">
                                        <option value="" disabled defaultValue>Selecione um tipo</option>
                                        <option /* name='Municipal' */>Municipal</option>
                                        <option /* name='Estadual' */>Estadual</option>
                                        <option /* name='Federal' */>Federal</option>
                                    </Field>
                                </div>
                                {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                            </div>
                        </div>
                        <div className='row'>    
                            <div className="col-md-6">
                                <label>Descrição da lei</label>
                                    <Field name="description" row='6' component="textarea" type="text" placeholder="Descreva da lei" className="form-control" />
                                    {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                            </div>
                        </div>
                        <div className="box-footer">
                            <button
                                type='submit'
                                className='btn btn-success btnLogin'
                                onClick={() => { dispatch(window.location = '/listLeis')}}
                                >Cadastrar</button>
                        </div>
                    </div>
                </div>
        </form>
    )
}

let FormLei = reduxForm({ form: 'newLeisForm' })(Form)   // A unique identifier for this form	

const selector = formValueSelector('newLeisForm')
FormLei = connect(state => {
    const typeLeiValue = selector(state, 'typeLei')	
    return { typeLeiValue }	
})(FormLei)

export default FormLei

/*
<Tab  name='Estadual' eventKey="estaduais" title="Estaduais">
                    <div className='tabContent'>
                        <h5><b>Dados das leis estaduais</b></h5>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label></label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fas fa-signature"/></span>
                                    <Field name="name" component="input" type="text" placeholder="Artigo da lei" className="form-control" />
                                </div>
                                // {/* <h5 className="requiredField">*Campo obrigatório</h5> }
                                </div>
                                </div>
                                <div className='row'>    
                                    <div className="col-md-6">
                                        <label>Descrição da lei</label>
                                            <Field name="description" row='6' component="textarea" type="text" placeholder="Descreva da lei" className="form-control" />
                                            // {/* <h5 className="requiredField">*Campo obrigatório</h5> }
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <button
                                        type='submit'
                                        className='btn btn-success btnLogin'
                                        onClick={() => { dispatch(window.location = '/listLeis')}}
                                        >Cadastrar</button>
                                </div>
                            </div>
                        </Tab>
                        <Tab  name='Federal' eventKey="federais" title="Federais">
                            <div className='tabContent'>
                                <h5><b>Dados das leis federais</b></h5>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label></label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fas fa-signature"/></span>
                                            <Field name="name" component="input" type="text" placeholder="Artigo da lei" className="form-control" />
                                        </div>
                                        // {/* <h5 className="requiredField">*Campo obrigatório</h5> }
                                    </div>
                                </div>
                                <div className='row'>    
                                    <div className="col-md-6">
                                        <label>Descrição da lei</label>
                                            <Field name="description" row='6' component="textarea" type="text" placeholder="Descreva da lei" className="form-control" />
                                            // {/* <h5 className="requiredField">*Campo obrigatório</h5> }
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <button
                                        type='submit'
                                        className='btn btn-success btnLogin'
                                        onClick={() => { dispatch(window.location = '/listLeis')}}
                                        >Cadastrar</button>
                                </div>
                            </div>
                        </Tab>
*/