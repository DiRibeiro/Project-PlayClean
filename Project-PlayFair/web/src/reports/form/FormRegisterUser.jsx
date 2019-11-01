import React from 'react'
import { useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

const FormRegisterAccount = props => {

    const loading = useSelector(state => state.auth.loading)

    const phoneMask = createTextMask({ pattern: '(99) 99999-9999' })
    const cpfMask= createTextMask({ pattern: '999.999.999-99' })

    return (
        <div className='box box-success'>
            <div className='box-body'>
                <form onSubmit={ props.handleSubmit } >
                    <h4>Criar novo usuário</h4>
                    <div className='col-6 col-md-6'>
                        <label>Nome</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-signature"></i></span>
                                <Field
                                    required
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="Ex.: Carlos Eduardo"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-6'>
                        <label>Sobrenome</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-signature"></i></span>
                                <Field
                                    required
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Ex.: Vicente"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-6'>
                        <label>CPF</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-id-card"></i></span>
                                <Field
                                    { ...cpfMask }
                                    type="tel"
                                    required
                                    name="cpf"
                                    component="input"
                                    placeholder="___-___-___-__"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-6'>
                        <label>Email</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-at"></i></span>
                                <Field
                                    required
                                    name="email"
                                    component="input"
                                    type="e-mail"
                                    placeholder="exemplo@email.com"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-6'>
                        <label>Telefone</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-phone"></i></span>
                                <Field
                                    { ...phoneMask }
                                    type="tel"
                                    required
                                    name="phone1"
                                    component="input"
                                    placeholder="Ex.: (55) 98888-7777"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Tipo de usuário</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-id-card"></i></span>
                                <Field
                                    name="type"
                                    component="input"
                                    type="text"
                                    placeholder={ props.type }
                                    className="form-control"
                                    disabled />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='col-6 col-md-6'>
                        <label>Senha</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-key"></i></span>
                                <Field
                                    required
                                    name="password"
                                    component="input"
                                    type="password"
                                    placeholder="Sua senha"
                                    className="form-control" />
                            </div>
                            <h5 className="requiredField">*Insira sua senha atual</h5>
                        </div>
                    </div>
                    <div className='col-6 col-md-6'>
                        <label>Confirmar Senha</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-key"></i></span>
                                <Field
                                    required
                                    name="confirmPassword"
                                    component="input"
                                    type="password"
                                    placeholder="confirmar senha"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='form-group col-6 col-md-6' id='cbxLogin'>
                        <button
                            type='submit'
                            className='btn btn-success btnLogin'
                            disabled={ loading ? true : false  }>
                            { loading && <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i> }
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({ form: 'formRegisterAccount' })(FormRegisterAccount)

/*

        firstName
        lastName
        cpf
        phone1
    email
    type
    password

*/