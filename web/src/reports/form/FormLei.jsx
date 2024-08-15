import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

//import 'react-widgets/dist/css/react-widgets.css'

let FormLei = props => {
    

    useEffect(() => {
        console.log("Mounting...", props.handleSubmit)
        momentLocaliser(moment)
    }, [])
        
    return (
        
        <form onSubmit={props.handleSubmit} className="form-group" encType="multipart/form-data">
            {/* Information about what whistleblower */}
            <div className="box box-success">
                <div className="box-header with-border">
                </div>  
                <div className="box-body">
                        {/* <h5><b>Dados das leis municipais</b></h5> */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Título da lei</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fas fa-signature"/></span>
                                    <Field name="title" component="input" type="text" placeholder="Titulo da lei" className="form-control" />
                                </div>
                                {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Tipo de lei</label>
                                <div className="input-group">
                                    {/* <span className="input-group-addon"><i className="fas fa-signature"/></span> */}
                                    <Field name='type' component="select" className="form-control select">
                                        <option value="" disabled defaultValue>Selecione um tipo</option>
                                        <option value='Municipal' >Municipal</option>
                                        <option value='Estadual' >Estadual</option>
                                        <option value='Federal' >Federal</option>
                                    </Field>
                                </div>
                                {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                            </div>
                        </div>
                        <div className='row'>    
                        <div className="col-md-6">
                        
                        
                        <h5 className="description">*Selecione o documento PDF Associado a esta LEI</h5>
                            <input id="select-document"
                                type="file" 
                                name="mydocument" 
                                accept="application/pdf" 
                                onChange={ props.handleDocument } 
                                 />
                                </div>
                        </div>
                        <div className="box-footer">
                            <button
                                type='submit'
                                className='btn btn-success btnLogin'
                                htmlType="submit"
                                >Cadastrar</button>
                        </div>
                    </div>
                </div>
        </form>
       
    )
}

FormLei =  reduxForm({ form: 'newLeisForm' })(FormLei)   // A unique identifier for this form	

export default FormLei


/*
const selector = formValueSelector('newLeisForm')
FormLei = connect(state => {
    const typeLeiValue = selector(state, 'typeLei')	
    return { typeLeiValue }	
})(FormLei)
*/

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