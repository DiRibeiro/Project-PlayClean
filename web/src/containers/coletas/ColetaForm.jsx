import React from 'react'
import { Field, reduxForm } from 'redux-form'

//import 'react-widgets/dist/css/react-widgets.css'


const ColetaForm = props => {

    return (
        <form onSubmit={props.handleSubmit} className="form-group">
            {/* Information about what whistleblower */}
            <h3 className="box-title">Agendamento de Coletas</h3>

            <div className="box box-success">
                <div className="box-header with-border">
                </div>
                <div className="box-body">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Bairro</label>
                            {/* <div className="input-group"> */}
                                <Field name="neighborhood" component="select" className="form-control select">
                                    <option value="" disabled defaultValue>Selecione</option>
                                    <option value="Aguapés" >Aguapés</option>
                                    <option value="Albatroz" >Albatroz</option>
                                    <option value="Arroio das Pedras" >Arroio das Pedras</option>
                                    <option value="Arroio Grande" >Arroio Grande</option>
                                    <option value="Atlântida Sul" >Atlântida Sul</option>
                                    <option value="Baixada" >Baixada</option>
                                    <option value="Barranceira" >Barranceira</option>
                                    <option value="Bellvile Condomínio" >Bellvile Condomínio</option>
                                    <option value="Borrúsia" >Borrúsia</option>
                                    <option value="Bosque do Albatroz" >Bosque do Albatroz</option>
                                    <option value="BR 101" >BR 101</option>
                                    <option value="Caconde" >Caconde</option>
                                    <option value="Caiu do Céu" >Caiu do Céu</option>
                                    <option value="Campos de Dentro" >Campos de Dentro</option>
                                    <option value="Caravágio" >Caravágio</option>
                                    <option value="Cascata" >Cascata</option>
                                    <option value="Central de Triagem" >Central de Triagem</option>
                                    <option value="Centro" >Centro</option>
                                    <option value="Costa Verde" >Costa Verde</option>
                                    <option value="Distrito Industrial" >Distrito Industrial</option>
                                    <option value="Encosta da Serra" >Encosta da Serra</option>
                                    <option value="Estrada Posto Buffon" >Estrada Posto Buffon</option>
                                    <option value="Estrada Romildo Bolzan" >Estrada Romildo Bolzan</option>
                                    <option value="Estrada da Perua" >Estrada da Perua</option>
                                    <option value="Estrada do Mar" >Estrada do Mar</option>
                                    <option value="Estrada José Oliveira Ouriques" >Estrada José Oliveira Ouriques</option>
                                    <option value="Farroupilha" >Farroupilha</option>
                                    <option value="Figueira Grande" >Figueira Grande</option>
                                    <option value="Glória" >Glória</option>
                                    <option value="Goiabeira 1 e 2" >Goiabeira 1 e 2</option>
                                    <option value="Ilha" >Ilha</option>
                                    <option value="Interlagos" >Interlagos</option>
                                    <option value="Invernada" >Invernada</option>
                                    <option value="Jardim da Lagoa" >Jardim da Lagoa</option>
                                    <option value="Lagoa do Horácio" >Lagoa do Horácio</option>
                                    <option value="Laranjeiras" >Laranjeiras</option>
                                    <option value="Livramento" >Livramento</option>
                                    <option value="Loteamento Serramar" >Loteamento Serramar</option>
                                    <option value="Mariápolis" >Mariápolis</option>
                                    <option value="Marmeleiro" >Marmeleiro</option>
                                    <option value="Medianeira" >Medianeira</option>
                                    <option value="Morro da Antena" >Morro da Antena</option>
                                    <option value="Palmital" >Palmital</option>
                                    <option value="Panorâmico" >Panorâmico</option>
                                    <option value="Parque Eólico" >Parque Eólico</option>
                                    <option value="Parque Real" >Parque Real</option>
                                    <option value="Parque da lagoa" >Parque da lagoa</option>
                                    <option value="Parque de Rodeios" >Parque de Rodeios</option>
                                    <option value="Parque do Sol" >Parque do Sol</option>
                                    <option value="Passinhos" >Passinhos</option>
                                    <option value="Penitenciária Modulada" >Penitenciária Modulada</option>
                                    <option value="Pitangas" >Pitangas</option>
                                    <option value="Ponta dos Dihel" >Ponta dos Dihel</option>
                                    <option value="Por do Sol" >Por do Sol</option>
                                    <option value="Porto Lacustre" >Porto Lacustre</option>
                                    <option value="RS 030" >RS 030</option>
                                    <option value="RST 101" >RST 101</option>
                                    <option value="Rincão" >Rincão</option>
                                    <option value="Santa Luzia" >Santa Luzia</option>
                                    <option value="Santa Rita" >Santa Rita</option>
                                    <option value="Sertão" >Sertão</option>
                                    <option value="Serramar" >Serramar</option>
                                    <option value="Sindicato Rural" >Sindicato Rural</option>
                                    <option value="Sulbrasileiro" >Sulbrasileiro</option>
                                    <option value="Tombadouro" >Tombadouro</option>
                                    <option value="Trilhos" >Trilhos</option>
                                    <option value="Vila Brasília" >Vila Brasília</option>
                                    <option value="Vila Emboaba" >Vila Emboaba</option>
                                    <option value="Vila Petrobrás" >Vila Petrobrás</option>
                                    <option value="Vila Popular" >Vila Popular</option>
                                    <option value="Vila da Serra" >Vila da Serra</option>
                                    <option value="Vila dos Pescadores do Passo da Lagoa" >Vila dos Pescadores do Passo da Lagoa</option>
                                    <option value="Várzea do Padre" >Várzea do Padre</option>
                                 </Field>
                        </div>
                        <div className="col-md-6">
                            <label>Descrição Coleta Orgânica</label>
                            <Field name='organic' component='textarea' className="form-control" placeholder='Segunda-feira - Manhã&#10;Quinta-feira - Tarde'  style={{ height: 100 }}/>
                            <br/>
                            <label>Descrição Coleta Seletiva</label>
                            <Field name='selective' component='textarea' className="form-control" placeholder='Terça-feira - Tarde&#10;Quinta-feira - Noite' style={{ height: 100 }}/>
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
