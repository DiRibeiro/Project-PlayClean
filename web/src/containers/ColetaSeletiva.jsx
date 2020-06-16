import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'

// import moment from 'react-widgets-moment'
// import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'
import { postColeta } from '../actions/coletaActions'

let ColetaSeletiva = props => {
    const dispatch = useDispatch()

    const handleForm = values => {
        console.log(values)
        dispatch(postColeta(values))
    }
    
    return (
        <form onSubmit={handleForm} className="form-group">
            {/* Information about what whistleblower */}
            <h3 className="box-title">Coleta Seletiva</h3>
            <div className="box box-success">
                <div className="box-header with-border">
                </div>  
                <div className="box-body">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Bairro</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fas fa-signature"/></span>
                                    <Field name="name" component="input" type="text" placeholder="Nome do bairro" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Tipo de coleta</label>
                                <div className="input-group">
                                    {/* <span className="input-group-addon"><i className="fas fa-signature"/></span> */}
                                    <Field name='selective' component="select" className="form-control select">
                                        <option value="Seletiva" defaultValue>Seletiva</option>
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

ColetaSeletiva =  reduxForm({ form: 'newColetaForm' })(ColetaSeletiva)   // A unique identifier for this form	

export default ColetaSeletiva