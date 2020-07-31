import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'

import 'react-widgets/dist/css/react-widgets.css'


const ColetaForm = props => {

    return (
        <form onSubmit={props.handleSubmit} className="form-group">
            {/* Information about what whistleblower */}
            <h3 className="box-title">Agendamento de Coletas</h3>

            <div className="box box-success">
                <div className="box-header with-border">
                </div>
                <div className="box-body">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label>Bairro</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-signature" /></span>
                                <Field name="neighborhood" component="input" type="text" placeholder="Nome do bairro" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label>Tipo de coleta</label>
                            <div className="input-group">
                                {/* <span className="input-group-addon"><i className="fas fa-signature"/></span> */}
                                <Field name='type' component="select" className="form-control select">
                                    <option value="" disabled defaultValue>Selecione</option>
                                    <option value="organica" >Orgânica</option>
                                    <option value="seletiva" >Seletiva</option>
                                </Field>
                            </div>
                            {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <label>Descrição do horário</label>
                            <Field name="description" row='6' component="textarea" type="text" placeholder="Manhã/Tarde" className="form-control" />
                            {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                        </div>
                    </div>
                    <div className="box-footer">
                        <button
                            type='submit'
                            className='btn btn-success btnLogin'
                        // htmlType="submit"
                        >Cadastrar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'newColetaForm' })(ColetaForm)
