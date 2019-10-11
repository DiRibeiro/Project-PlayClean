import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Field, reduxForm, reset, formValueSelector} from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
import { DateTimePicker } from 'react-widgets'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

import { create } from '../actions/reportActions'
import { selectTab, showTabs } from '../actions/tabActions'

const Form = props => {
    const { handleSubmit, handleImage, pristine, submitting } = props

    const [files] = useState(props.images)
    const utils = useSelector(state => state.utils)

    const phoneMask = createTextMask({ pattern: '(99) 99999-9999' })
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])

    const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => 
        <DateTimePicker
            onChange={ onChange }
            format="DD MMM YYYY"
            time={ showTime }
            value={ !value ? null : new Date(value) }
            placeholder="Data do ocorrido" />
    

    const renderImages = () => 
        files.map((element, index) => 
            <img
                key={ index }
                style={{ 
                    clear: 'both',
                    width: '100px',
                    height: '100px',
                    margin: '0px 5px',
                    marginTop: '-14px',
                    borderRadius: '3px'
                }} 
                src={ URL.createObjectURL(element) } 
                alt="img report" 
            />
        )
     
        return(
            <form onSubmit={handleSubmit} className='form-group' encType='multipart/form-data'>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label>Nome</label>
                            <div className='input-group'>
                                <span className="input-group-addon"><i className="fas fa-user"/></span>
                                <Field name="name" component="input" type="text" placeholder="Nome" className="form-control" />
                            </div>                        
                        </div>
                        <div className='col-md-3'>
                            <label>Telefone</label>
                            <div className='input-group'>
                                <span className="input-group-addon"><i className="fas fa-phone"/></span>
                                <Field required name="phone" component="input" type="tel" placeholder="(__) _____-____" className="form-control" />
                            </div>                        
                            <h5 className='requiredField'>*Campo obrigatório</h5>
                        </div>
                        <div className='col-md-3'>
                            <label>Data da denúncia</label>
                            <div className='input-group date'>
                                <Field 
                                    name='date'
                                    showTime={ false }
                                    component={ renderDateTimePicker }
                                />
                            </div>
                        </div>                       
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label>Local da denúncia</label>
                            <div className='input-group'>
                                <span className="input-group-addon"><i className="fas fa-map"/></span>
                                <Field required name="adressOccured" component="input" type="text" placeholder="Endereço do local da denúncia" className="form-control" />
                            </div> 
                            <h5 className='requiredField'>*Campo obrigatório</h5>                       
                        </div>
                        <div className='col-md-3'>
                            <label>Tipo de denúncia</label>
                            <div className='input-group'>
                                <span className="input-group-addon"><i className="fas fa-list"/></span>
                                <Field required name="typeReport" component="select" className="form-control select">
                                    <option value="" disabled defaultValue>Selecione um tipo</option>
                                    <option>Lixo irregular</option>
                                    <option>Descarte de material incorreto</option>
                                    <option>Lâmpadas de mercúrio</option>
                                    <option>Outro</option>
                                </Field>
                            </div>                        
                            <h5 className='requiredField'>*Campo obrigatório</h5>
                        </div>
                        <div className='col-md-3'>
                            <label>Data da ocorrência</label>
                            <div className='input-group date'>
                                <Field 
                                    name='dateOccured'
                                    showTime={ false }
                                    component={ renderDateTimePicker }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12' style={{ marginBottom: '20px' }}>
                            <label>Descrição</label>
                            <Field className='form-control' component='textarea' rows='10' name='description' placeholder='Descreva a denúncia detalhadamente.' />
                            <h5 className='description'>*Toda informação é útil</h5>
                        </div>
                    </div>

                   {/* {renderImages() } */}

                    <label 
                        htmlFor='select-pictures'
                        style={{ 
                            clear: 'both',
                            width: '100px',
                            heigth: '100px',
                            margin: '5px',
                            backgroundColor: '#3c8dbc',
                            color: '#fff',
                            border: 'none',
                            // display: 'inline-block',
                            borderRadius: '3px',
                            padding: '28px 35px',
                            fontSize: '32px',
                            cursor: 'pointer',
                        }} ><i className="fas fa-photo"></i></label>                    

                    <h5 className="description">*Insira somente imagens da denúncia.</h5>
                                <input id="select-pictures"
                                    type="file" 
                                    name="images" 
                                    accept="image/png, image/jpeg" 
                                    onChange={ handleImage } 
                                    multiple 
                                    style={{ display: 'none' }} />
                <div className="box-footer">
                    <button 
                        type="button" 
                        disabled={pristine || submitting} 
                        onClick={ () => {
                            reset('Form')
                            }
                        } 
                        className='btn btn-danger btn-edit'>
                            <i className='fa fa-close'/> Limpar</button >
                    <button 
                        type="submit" 
                        disabled={pristine || submitting}
                        className='btn btn-success btn-edit'>
                            <i className='fa fa-save'/> Salvar</button >
                </div>     
            </form>
        )
}

let FormReport = reduxForm({
    form: 'Form',
    destroyOnUnmount: false
})(Form)

const selector = formValueSelector('Form')

FormReport = connect(state => {
    // can select values individually
    const typeReportValue = selector(state, 'typeReport')

    return {
        typeReportValue
    }

})(FormReport)

export default FormReport