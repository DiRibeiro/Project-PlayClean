import React from 'react'

export default props => (
    <div className="box box-success">
    <div className="box-header with-border">
        <h3 className="box-title">Leis</h3>
    </div>
        <div className="box-body">
            <div className="row">
                <div className="col-md-12">
                        <label>Adicionar Lei Municipal: </label>
                        <textarea className="form-control" rows="10" defaultValue='' placeholder='Insira uma nova lei' />
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary btn-edit"><i className='fa fa-save'/> Adicionar</button>
                    </div>
                </div>
                <div className="col-md-12">
                        <label>Adicion Lei Estadual: </label>
                        <textarea className="form-control" rows="10" defaultValue='' placeholder='Insira uma nova lei' />
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary btn-edit"><i className='fa fa-save'/> Adicionar</button>
                    </div>
                </div>
                <div className="col-md-12">
                        <label>Adicionar Lei Federal: </label>
                        <textarea className="form-control" rows="10" defaultValue='' placeholder='Insira uma nova lei' />
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary btn-edit"><i className='fa fa-save'/> Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

/*
    On 800 margin top 22
    img-responsive

    On 1300 margin top 3
    seeMoreAnimal
*/