import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
// import { DateTimePicker } from 'react-widgets'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'
import { postCataTreco } from '../actions/cataTrecoActions'

import FormData from 'form-data'

const Form = props => {
    const dispatch = useDispatch()
    const handleSubmit = values => {
        const fd = new FormData()

        for (let key in values)
        if (values.hasOwnProperty(key))
            fd.append(key, values[key])

        dispatch(postCataTreco(fd))
    }

    const cpfMask= createTextMask({ pattern: '999.999.999-99' })

    useEffect(() => {
        momentLocaliser(moment)
    }, [])
    
    return (
        <form onSubmit={ values => handleSubmit(values) } className="form-group">
            {/* Information about what whistleblower */}
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title">Agende a busca!</h3>
                </div>  
                <div className="box-body">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label>Nome</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-user"/></span>
                                <Field name="name" component="input" type="text" placeholder="Nome completo" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>CPF</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-address-card"></i></span>
                                <Field { ...cpfMask } name="cpf" component="input" type="text" placeholder="_________-__" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">   
                            <label>Endereço</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-city" /></span>
                                <Field name="adressOcurr" component="input" type="text" placeholder="Ex.: Avenida Brasil - 5000" className="form-control" />
                            </div>
                            <h5 className="description">*Endereço do ocorrido</h5>
                        </div>
                        <div className="col-md-6">
                            <label>Bairro</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-bars" /></span>
                                <Field required name="local" component="input" type="text" placeholder="Ex.: Centro" className="form-control" />
                            </div>
                            <h5 className="requiredField">*Campo obrigatório</h5>
                        </div>
                        <div className="col-md-12" style={{ marginBottom: '20px' }}>
                            <label>Descrição</label>{/* <textarea className="form-control" rows="4" placeholder="Descreva a denúncia por completo, incluíndo características de veículos vistos pela região, como cor, placa. Informe a hora. Descreva a cena." /> */}
                            <Field className="form-control" rows="4" name="description" component="textarea" placeholder="Descreva a denúncia por completo." />                        
                            <h5 className="description">*Qualquer informação é útil</h5>
                        </div>
                    </div>
                    <div className="box-footer">
                        <button
                            type='submit'
                            className='btn btn-success btnLogin'
                            onClick={() => { dispatch(window.location = '/listCataTreco')}}
                            >Agendar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

let CataTreco = reduxForm({ form: 'newCataTrecoForm' })(Form)   // A unique identifier for this form	

const selector = formValueSelector('newCataTrecoForm')
CataTreco = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(CataTreco)

export default CataTreco

// const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => 
    //     <DateTimePicker
    //         onChange={ onChange }
    //         format="DD MMM YYYY"
    //         time={ showTime }
    //         value={ !value ? null : new Date(value) }
    //         placeholder="Data do ocorrido" />