import React from 'react'
import { useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

import Button from '../../template/Button'

const FormChangeAccount = props => {
    const user = useSelector(state => state.user.personalInfo)
    const utils = useSelector(state => state.utils)

    const phoneMask = createTextMask({
        pattern: '(99) 99999-9999'
    })

    return (
        <div className='box box-success'>
            <div className='box-body'>
                <form onSubmit={ props.handleSubmit } >
                    <h4>Alterar informações de usuário</h4>
                    <div className='col-6 col-md-6'>
                        <label>Nome</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-signature"></i></span>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder={ user.firstName }
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
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder={ user.lastName }
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
                                    name="phone1"
                                    component="input"
                                    placeholder={ user.phone1 }
                                    className="form-control" />
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
                        <label>Nova senha</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-key"></i></span>
                                <Field
                                    name="newPassword"
                                    component="input"
                                    type="password"
                                    placeholder="Sua nova senha"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className='col-6 col-md-6'>
                        <label>Confirmar</label>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-key"></i></span>
                                <Field
                                    name="newPasswordConfirm"
                                    component="input"
                                    type="password"
                                    placeholder="Repita a nova senha"
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    
                    <hr/>
                    
                    <div className='form-group' id='cbxLogin' style={{ marginRight: '15px' }}>
                        <Button 
                            label='Atualizar'
                            loading={ utils.loading }
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({ form: 'formChangeAccount' })(FormChangeAccount)