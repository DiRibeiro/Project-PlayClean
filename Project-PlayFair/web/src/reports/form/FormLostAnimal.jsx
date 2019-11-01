import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

const FormLostAnimal = props => {

    const { handleSubmit, isOtherValue } = props

    return (
        <form onSubmit={ handleSubmit } className="indicate-form form-group">
            {/* Information about the responsible of the animal */}
            <h4><b>Informações sobre o responsável</b></h4>
            <div className="row">
                <div className="col-md-6">
                    <label>Nome</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-signature" /></span>
                        <Field required name="ownerLostAnimalForm" component="input" type="text" placeholder="Name" className="form-control" />
                    </div>
                    <h5 className="description">*Campo obrigatório - Nome do responsável pelo animal</h5>
                </div>
                <div className="col-md-6">
                    <label>Endereço</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-home" /></span>
                        <Field name="adressLostAnimalForm" component="input" type="text" placeholder="Ex.: ONG Pet+ Avenida Paraguassú - 000 " className="form-control" />
                    </div>
                    <h5 className="description">*Onde o animal foi perdido</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Telefone</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-phone"></i></span>
                        <Field name="phoneLostAnimalForm" component="input" type="number" placeholder="(__) _____-____" className="form-control" />
                    </div>
                </div>
                <div className="col-md-3">
                    <label>E-mail</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-at" /></span>
                        <Field name="emailLostAnimalForm" component="input" type="email" placeholder="exemplo@gmail.com" className="form-control" />
                    </div>
                </div>
            </div>
                
            {/* Information about the responsible of the animal */}
            <h4><b>Informações sobre o animal</b></h4>
            <div className="row">
                <div className="col-md-6">
                    <label>Nome do animal/Título do registro</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-paw" /></span>
                        <Field required name="titleLostAnimalForm" component="input" type="text" placeholder="Ex.: Marley ou Cão dócil peludo" className="form-control" />
                    </div>
                    <h5 className="description">*Campo obrigatório</h5>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Porte</label>
                        <span className="input-group-addon"><i className="fas fa-weight" /></span>
                        <Field required name="sizeLostAnimalForm" component="select" className="form-control select">
                            <option value="" disabled defaultValue>Selecione</option>
                            <option>Pequeno</option>
                            <option defaultChecked >Médio</option>
                            <option>Grande</option>
                        </Field>
                    </div>
                    <h5 className="description">*Campo obrigatório</h5>
                </div>
                <div className="col-md-2">
                    <label>Idade</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fas fa-heart" /></span>
                            <Field required name="ageLostAnimalForm" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione</option>
                                <option>Filhote</option>
                                <option defaultChecked >Adulto</option>
                                <option>Idoso</option>
                            </Field>
                        </div>
                        <h5 className="description">*Campo obrigatório</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <label>Sexo</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fas fa-venus-mars" /></span>
                        <Field required name="sexLostAnimalForm" component="select" className="form-control select">
                            <option value="" disabled defaultValue>Selecione</option>
                            <option>Macho</option>
                            <option>Fêmea</option>
                        </Field>
                    </div>
                    <h5 className="description">*Campo obrigatório</h5>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Espécie</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fas fa-bone" /></span>
                            <Field required name="speciesLostAnimalForm" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione um tipo</option>
                                <option>Cão</option>
                                <option>Gato</option>
                                <option value="isOther">Outro</option>
                            </Field>
                        </div>
                        <h5 className="description">*Campo obrigatório</h5>
                    </div>
                </div>
                { isOtherValue === 'isOther' && (
                    <div className="col-md-3">
                        <label>Expecifique a espécie</label>
                        <div className="input-group">
                            <Field required name="otherSpecieLostAnimalForm" component="input" type="text" className="form-control" />
                        </div>
                        <h5 className="description">*Campo obrigatório</h5>
                    </div>
                ) }
            <div className="row">
                <div className="col-md-12">
                    <label>Descrição</label>
                    <Field name="descriptionLostAnimalForm" component="textarea" className="form-control" rows="4" placeholder="Aqui você descreve o animal. Pode contar um pouco da história dele também" />                
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <input type="file" name="images" accept="image/png, image/jpeg" multiple /> 
                </div>
                <h5 className="description">*Insira imagens claras que caracterizem e descrevam o animal</h5>
            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    )
}

const FormLostAnimal2 = reduxForm({ form: 'LostAnimalForm' })(FormLostAnimal)

const selector = formValueSelector('LostAnimalForm')

const FormLostAnimal3 = connect(state => {
    const isOtherValue = selector(state, 'speciesLostAnimalForm')

    return { isOtherValue }
})(FormLostAnimal2)

export default FormLostAnimal3