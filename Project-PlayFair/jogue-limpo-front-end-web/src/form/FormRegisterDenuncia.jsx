import React from 'react'

export default props => (
    <div className="box box-primary">
        <div className="box-header with-border">
            <h3 className="box-title">Cadastrar Denúncia</h3>
        </div>
        <div className="box-body">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group"> 
                        <label>Nome:</label>
                        <input type="text" className="form-control" id="name" placeholder="Nome completo" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Local da denúncia:</label>
                        <input type="text" className="form-control" id="endereco" placeholder="Av. João Sarmento nº 8" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Tipo de denúncia:</label>
                        <select className="form-control select2">
                            <option>Opção 1</option>
                            <option selected="selected">Opção 2</option>
                            <option>Opção 3</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <label>Descrição: </label>
                    <textarea className="form-control" rows="4" placeholder="Aqui você descreve o motivo da denúncia." />
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
        <div className="box-footer">
            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
    </div>
)