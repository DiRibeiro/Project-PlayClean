import React from 'react'
import { Link } from 'react-router'

import { fullDate } from '../helper/date'

const RowCataTreco = props => {
    const renderDom = () => {
        let statusDom
        let cataTreco = props.cataTreco || props

        if(cataTreco.status === 0)
            statusDom = (<button className="btn btn-success">Aberta</button>)

        else if(cataTreco.status === 1) 
            statusDom = (<button className="btn btn-dark">Fechada</button>)

        else if(cataTreco.status === 2) 
            statusDom = (<button className="btn btn-warning">Pendente</button>)

        return (
            <div className="box box-success">
                <div className="box-body listCataTreco">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ cataTreco.title }</h3>
                        <span>Ocorreu dia { fullDate(cataTreco.dateOcurr) }</span><br />
                        <span>Cadastrado dia { fullDate(cataTreco.dateCreate) }</span><br />
                        <p>{ cataTreco.description }</p>
                    </div>
                    <Link to={{ pathname: '/showDetailCataTreco', state: cataTreco._id }} >
                        <button className="btn btn-primary bottomZero">Ver mais</button>
                    </Link>
                    { statusDom }
                </div>
            </div>
        )
    }
    
    return renderDom()
}

export default RowCataTreco