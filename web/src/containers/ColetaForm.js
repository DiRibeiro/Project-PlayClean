import React/* , { useEffect } */ from 'react'
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
                                    <option value="atlantida sul" >Atlântida Sul</option>
                                    <option value="Baixada" >Baixada</option>
                                    <option value="Barranceira" >Barranceira</option>
                                    <option value="Borrúsia" >Borrúsia</option>
                                    <option value="Bosque do Albatroz" >Bosque do Albatroz</option>
                                    <option value="Caconde" >Caconde</option>
                                    <option value="Caiu do Céu" >Caiu do Céu</option>
                                    <option value="Campos de Dentro" >Campos de Dentro</option>
                                    <option value="Cascata" >Cascata</option>
                                    <option value="Centro" >Centro</option>
                                    <option value="Costa Verde" >Costa Verde</option>
                                    <option value="Distrito Industrial" >Distrito Industrial</option>
                                    <option value="Estrada Posto Buffon" >Estrada Posto Buffon</option>
                                    <option value="Estrada Romildo Bolzan" >Estrada Romildo Bolzan</option>
                                    <option value="Estrada da Perua" >Estrada da Perua</option>
                                    <option value="Estrada do Mar" >Estrada do Mar</option>
                                    <option value="Farroupilha" >Farroupilha</option>
                                    <option value="Figueira Grande" >Figueira Grande</option>
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
                                    <option value="Ponta dos Dihel" >Ponta dos Dihel</option>
                                    <option value="Por do Sol" >Por do Sol</option>
                                    <option value="Porto Lacustre" >Porto Lacustre</option>
                                    <option value="RS 030" >RS 030</option>
                                    <option value="RST 101" >RST 101</option>
                                    <option value="Rincão" >Rincão</option>
                                    <option value="Santa Luzia" >Santa Luzia</option>
                                    <option value="Santa Rita" >Santa Rita</option>
                                    <option value="Sertão" >Sertão</option>
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
                            {/* </div> */}
                        </div>
                    {/* </div> */}
                    {/* <div className="row mb-3"> */}
                        <div className="col-md-3">
                            <label>Tipo de coleta</label>
                            {/* <div className="input-group"> */}
                                {/* <span className="input-group-addon"><i className="fas fa-signature"/></span> */}
                                <Field name='type' component="select" className="form-control select">
                                    <option value="" disabled defaultValue>Selecione</option>
                                    <option value="Orgânica" >Orgânica</option>
                                    <option value="Seletiva" >Seletiva</option>
                                </Field>
                            {/* </div> */}
                            {/* <h5 className="requiredField">*Campo obrigatório</h5> */}
                        </div>
                    {/* </div> */}
                    {/* <div className='row mb-3'> */}
                        <div className="col-md-3">
                            <label>Horário</label>
                            {/* <div className="input-group"> */}
                            <Field name='description' component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione</option>
                                <option value="Segunda-Feira de Manhã" >Segunda-Feira de Manhã</option>
                                <option value="Segunda-Feira de Tarde" >Segunda-Feira de Tarde</option>
                                <option value="Segunda-Feira de Manhã/Tarde" >Segunda-Feira de Manhã/Tarde</option>
                                <option value="Terça-Feira de Manhã" >Terça-Feira de Manhã</option>
                                <option value="Terça-Feira de Tarde" >Terça-Feira de Tarde</option>
                                <option value="Terça-Feira de Manhã/Tarde" >Terça-Feira de Manhã/Tarde</option>
                                <option value="Quarta-Feira de Manhã" >Quarta-Feira de Manhã</option>
                                <option value="Quarta-Feira de Tarde" >Quarta-Feira de Tarde</option>
                                <option value="Quarta-Feira de Manhã/Tarde" >Quarta-Feira de Manhã/Tarde</option>
                                <option value="Quinta-Feira de Manhã" >Quinta-Feira de Manhã</option>
                                <option value="Quinta-Feira de Tarde" >Quinta-Feira de Tarde</option>
                                <option value="Quinta-Feira de Manhã/Tarde" >Quinta-Feira de Manhã/Tarde</option>
                                <option value="Sexta-Feira de Manhã" >Sexta-Feira de Manhã</option>
                                <option value="Sexta-Feira de Tarde" >Sexta-Feira de Tarde</option>
                                <option value="Sexta-Feira de Manhã/Tarde" >Sexta-Feira de Manhã/Tarde</option>
                                <option value="Sábado de Manhã" >Sábado de Manhã</option>
                                <option value="Sábado de Tarde" >Sábado de Tarde</option>
                                <option value="Sábado de Manhã/Tarde" >Sábado de Manhã/Tarde</option>
                                <option value="Domingo de Manhã" >Domingo de Manhã</option>
                                <option value="Domingo de Tarde" >Domingo de Tarde</option>
                                <option value="Domingo de Manhã/Tarde" >Domingo de Manhã/Tarde</option>
                            </Field>
                            {/* </div> */}
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
