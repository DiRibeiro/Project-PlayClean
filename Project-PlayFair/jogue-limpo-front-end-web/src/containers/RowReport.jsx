import React, {Component} from 'react'

class RowReport extends Component {
    renderDom = () => {
        let statusDom

        if(this.props.status === 0)
            statusDom = (<a href="seeMoreReport">
                            <button className="btn btn-success">Em aberto</button>
                        </a>)

        else if(this.props.status === 1) 
            statusDom = (<a href="seeMoreReport">
                            <button className="btn btn-warning">Pendente</button>
                        </a>)

        else if(this.props.status === 2) 
            statusDom = (<a href="seeMoreReport">
                            <button className="btn btn-dark">Finalizado</button>
                        </a>)

        return (
            <div className="box box-success">
                <div className="box-body">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-name">{ this.props.name }</h3>
                        <h4 className='box-title'>{ this.props.typeReport }</h4>
                        <span>Cadastrado dia { this.props.date }</span>
                        <p>{ this.props.description }</p>
                    </div>
                    <a href="seeMoreReport">
                        <button className="btn btn-primary btn-view" href="seeMoreReport">Ver mais</button>
                        { statusDom }
                    </a>
                </div>
            </div>
        )
    }
    render() {
        return this.renderDom()
    }
}

export default RowReport
/*
    col-sm-7 col-md-12 col-lg-8 col-xl-8
*/
