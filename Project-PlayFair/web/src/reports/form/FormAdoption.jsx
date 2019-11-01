import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

const FormAdoption = props => {
    const phoneMask = createTextMask({ pattern: '(99) 99999-9999' })

    return (
        <div className="col-12">
            <form onSubmit={ props.handleSubmit } encType="multipart/form-data">
                <div className="col-6 col-md-6 form-group">
                    <label>Nome do adotante</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-signature"></i></span>
                        <Field
                            required
                            name="whoAdopted"
                            component="input"
                            type="text"
                            placeholder="Ex.: Carlos Eduardo"
                            className="form-control" />
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
                                name="phoneWhoAdopted"
                                component="input"
                                placeholder="Ex.: (55) 98888-7777"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className='form-group col-6 col-md-6'>
                    <button
                        style={{ marginRight: '15px' }}
                        type="submit"
                        className="btn btn-primary">
                        Cadastrar adoção</button>
                        
                    <button
                        type="submit"
                        className="btn btn-dark"
                        data-dismiss="modal">
                        Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'formAdoption' })(FormAdoption)