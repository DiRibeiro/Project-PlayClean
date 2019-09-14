import React from 'react'
import IconButton from '../templates/iconButton'
import ListReport from '../containers/ListReport'

const FormReport = props => (
    <div className="box box-primary">
        <div className="box-header with-border">
            <h3 className="box-title">Verificar denúncias</h3>
        </div>
        <div className="box-body">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group"> 
                        <label>Nome:</label>
                        <input type="text" className="form-control" id="nameReport" placeholder="Nome completo " />
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-group">
                        <label>Data da denúncia:</label>

                        <div class="input-group date">
                            <div class="input-group-addon">
                                <i class="fa fa-calendar"></i>
                            </div>
                        <input type="text" class="form-control pull-right" id="datepicker" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group"> 
                        <label>Endereço da denúncia:</label>
                        <input type="text" className="form-control" id="adressReport" placeholder="Endereço da denúncia" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Local:</label>
                        <select className="form-control select2">
                            <option selected="selected">Osório</option>
                            <option>Aguapés</option>
                            <option>Albatroz</option>
                            <option>Arroio das Pedras</option>
                            <option>Arroio Grande</option>
                            <option>Atlântida Sul - Dezembro/Março</option>                            
                            <option>Atlântida Sul - Março/Dezembro</option>
                            <option>Baixada</option>
                            <option>Barranceira</option>
                            <option>Borússia</option>
                            <option>Bosque Albatroz</option>
                            <option>Caconde</option>
                            <option>Caiu do Céu</option>
                            <option>Campos de Dentro</option>
                            <option>Caravágio</option>
                            <option>Cascata</option>
                            <option>Centro</option>
                            <option>Costa Verde</option>
                            <option>Distrito Industrial</option>
                            <option>Estrada da Perua</option>
                            <option>Estrada do Mar</option>
                            <option>Estrada do Posto Buffon</option>
                            <option>Estrada Romildo Bolzan</option>
                            <option>Farroupilha</option>
                            <option>Figueira Grande</option>
                            <option>Glória</option>
                            <option>Goiabeira I e II</option>
                            <option>Ilha</option>
                            <option>Interlagos</option>
                            <option>Invernada</option>
                            <option>Jardim da Lagoa</option>
                            <option>Lagoa do Horácio</option>
                            <option>Laranjeiras</option>
                            <option>Livramento</option>
                            <option>Loteamento Serramar</option>
                            <option>Mariápolis</option>
                            <option>Marmeleiro</option>
                            <option>Medianeira</option>
                            <option>Morro das Antenas</option>
                            <option>Palmital</option>
                            <option>Panorâmico</option>
                            <option>Parque da Lagoa</option>
                            <option>Parque de Rodeios</option>
                            <option>Parque do Sol</option>
                            <option>Parque Eólico</option>
                            <option>Parque Real</option>
                            <option>Passinhos</option>
                            <option>Penitenciária Modulada</option>
                            <option>Pitangas</option>
                            <option>Pontal dos Dihel</option>
                            <option>Pór-do-sol</option>
                            <option>Porto Lacustre</option>
                            <option>Rincão</option>
                            <option>RS-030</option>
                            <option>RST-101</option>
                            <option>Santa Luzia</option>
                            <option>Santa Rita</option>
                            <option>Sertão</option>
                            <option>Sindicato Rural</option>
                            <option>Sulbrasileiro</option>
                            <option>Tombadouro</option>
                            <option>Trilhos</option>
                            <option>Várzea do Padre</option>
                            <option>Vila Brasília</option>
                            <option>Vila da Serra</option>
                            <option>Vila dos Pescadores do Passo da Lagoa</option>
                            <option>Vila Emboabas</option>
                            <option>Vila Petrobrás</option>
                            <option>Vila Popular</option>
                        </select>
                        <h5>*Se o local não está listado aqui é porque não pertence ao município de Osório.</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Tipo de Denúncia:</label>
                        <select className="form-control select2">
                            <option selected="selected">Meio Ambiente</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label>Descrição:</label>
                    <textarea className="form-control" rows="4" placeholder="Descreva a denúncia" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group"> 
                        <input type="file" name="images" accept="image/png, image/jpeg"  multiple /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <IconButton style="danger" icon="refresh" onClick={props.handleRefresh}>
            </IconButton>
            <IconButton style="warning" icon="hourglass" onClick={props.handleMarkAsPending}>
            </IconButton>
            <IconButton style="success" icon="check" onClick={props.handleMarkAsDone}>
            </IconButton>
        </div>
    </div>
)

export default FormReport