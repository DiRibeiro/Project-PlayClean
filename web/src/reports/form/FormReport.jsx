import React, { useEffect, useState } from 'react'
import { connect/* , useDispatch */} from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
// import { DateTimePicker } from 'react-widgets'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

const Form = props => {
    const { handleSubmit, handleImage } = props
    // const dispatch = useDispatch()
    const [files] = useState(props.images)

    const phoneMask = createTextMask({ pattern: '(99) 99999-9999' })
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])

    // const renderDateTimePicker = ({ input: { onChange, value } }) => 
    //     <DateTimePicker
    //         onChange={ onChange }
    //         format="MMM-DD-YYYY"
    //         value={ value ? null : new Date(value) }
    //         placeholder={'Date'}
    //         />

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
                alt="img report" />)
        
    return (
        <form onSubmit={ handleSubmit } className="form-group" encType="multipart/form-data" >
            
            <h4><b>Dados do usuário</b></h4>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label>Nome</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-user"/></span>
                        <Field name="name" component="input" type="text" placeholder="Nome completo" className="form-control" />
                    </div>
                    {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                </div>
                <div className="col-md-4">
                    <label>Telefone</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-phone"></i></span>
                        <Field { ...phoneMask } name="phone" component="input" type="tel" placeholder="(__) _____-____" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4">
                    <label>Data do ocorrido</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-calendar"></i></span>
                        <Field /* { ...renderDateTimePicker }  */name="dateOcurr" type='date' component="input" className="form-control" />
                    </div>
                </div>
            </div>
            <hr className="hrcustom" />

            {/* Information about what happened */}
            <h4><b>Dados da denúncia</b></h4>
            <div className="row mb-3">
                <div className="col-md-6">   
                    <label>Endereço</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-city" /></span>
                        <Field name="adressOcurr" component="input" type="text" placeholder="Ex.: Avenida Brasil - 5000" className="form-control" />
                    </div>
                    <h5 className="description">*Endereço do ocorrido</h5>
                </div>
                <div className="col-md-6">
                    <label>Tipo de denúncia</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-bars" /></span>
                        <Field required name="typeReport" component="select" className="form-control select">
                            <option value="" disabled defaultValue>Selecione um tipo</option>
                            <option>Lixo e caliças em área irregular</option>
                            <option>Caminhão não passou</option>
                            <option>Atraso do caminhão de lixo</option>
                            <option>Descarte de volumosos</option>
                        </Field>
                    </div>
                    <h5 className="requiredField">*Campo obrigatório</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: '20px' }}>
                    <label>Descrição</label>
                    <Field className="form-control" rows="4" name="description" component="textarea" placeholder="Descreva a denúncia por completo." />                        
                    <h5 className="description">*Qualquer informação é útil</h5>
                </div>
            </div>
            
            { renderImages() }
            
            <label 
                htmlFor="select-pictures"
                style={{
                    clear: 'both',
                    width: '100px', 
                    height: '100px',
                    margin: '5px',
                    backgroundColor: '#00a65a',
                    color: '#fff',
                    border: 'none',
                    // display: 'inline-block',
                    borderRadius: '3px',
                    padding: '28px 35px',
                    fontSize: '32px',
                    cursor: 'pointer',
                }} ><i className="fas fa-photo"></i></label>
            
            <h5 className="description">*Insira imagens que descrevam a denúncia</h5>
            <input id="select-pictures"
                type="file" 
                name="images" 
                accept="image/png, image/jpeg" 
                onChange={ handleImage } 
                multiple 
                style={{ display: 'none' }} />
            <div className="box-footer">
                <button
                    type='submit'
                    className='btn btn-success btnLogin'
                    //onClick={() => { dispatch(window.location = '/listReport')}}
                    >Cadastrar</button>
            </div>
        </form>
    )
}

let FormReport = reduxForm({ form: 'newReportForm' })(Form)   // A unique identifier for this form	

const selector = formValueSelector('newReportForm')
FormReport = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(FormReport)

export default FormReport