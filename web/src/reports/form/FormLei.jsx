import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Tabs, Tab } from 'react-bootstrap'

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
        <form onSubmit={ handleSubmit } className="form-group box box-success">
            <div>
            {/* Information about what whistleblower */}
            <Tabs className='showLei' defaultActiveKey="municipais" transition={false} id="noanim-tab-example">
                <Tab eventKey="municipais" title="Municipais">
                    <div className='tabContent'>
                        <h5><b>Dados das leis municipais</b></h5>
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
                            <button
                                type='submit'
                                className='btn btn-success btnLogin'
                                onClick={() => { dispatch(window.location = '/listLeis')}}
                                >Cadastrar</button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="estaduais" title="Estaduais">
                    <div className='tabContent'>
                        <h5><b>Dados das leis estaduais</b></h5>
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
                            <button
                                type='submit'
                                className='btn btn-success btnLogin'
                                onClick={() => { dispatch(window.location = '/listLeis')}}
                                >Cadastrar</button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="federais" title="Federais">
                    <div className='tabContent'>
                        <h5><b>Dados das leis federais</b></h5>
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
                            <button
                                type='submit'
                                className='btn btn-success btnLogin'
                                onClick={() => { dispatch(window.location = '/listLeis')}}
                                >Cadastrar</button>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            </div>
        </form>
    )
}

let FormLei = reduxForm({ form: 'newLeisForm' })(Form)   // A unique identifier for this form	

const selector = formValueSelector('newLeisForm')
FormLei = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(FormLei)

export default FormLei