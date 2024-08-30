import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ColetaForm = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <h3 className="box-title">Agendamento de Coletas</h3>

            <div className="box box-success">
                <div className="box-header with-border"></div>
                <div className="box-body">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="neighborhood">Bairro</label>
                            <Field 
                                name="neighborhood" 
                                component="select" 
                                className="form-control select"
                                id="neighborhood"
                                aria-label="Selecione o bairro"
                            >
                                <option value="" disabled>Selecione</option>
                                <option value="Aguapés">Aguapés</option>
                                <option value="Albatroz">Albatroz</option>
                                {/* Adicione todas as opções necessárias */}
                            </Field>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="organic">Descrição Coleta Orgânica</label>
                            <Field 
                                name="organic" 
                                component="textarea" 
                                className="form-control" 
                                id="organic"
                                placeholder="Segunda-feira - Manhã&#10;Quinta-feira - Tarde" 
                                style={{ height: 100 }}
                            />
                            <br/>
                            <label htmlFor="selective">Descrição Coleta Seletiva</label>
                            <Field 
                                name="selective" 
                                component="textarea" 
                                className="form-control" 
                                id="selective"
                                placeholder="Terça-feira - Tarde&#10;Quinta-feira - Noite" 
                                style={{ height: 100 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="box-footer">
                    <button
                        type="submit"
                        className="btn btn-success btnLogin"
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({ form: 'newColetaForm' })(ColetaForm);
