import React from 'react'
import { Link } from 'react-router'

import { fullDate } from '../helper/date'

const RowReport = props => {
    const renderDom = () => {
        let statusDom
        let report = props.report || props

        if(report.status === 0)
            statusDom = (<span className="badge-success">Aberta</span>)

        else if(report.status === 1) 
            statusDom = (<span className="badge-close">Fechada</span>)

        else if(report.status === 2) 
            statusDom = (<span className="badge-warning">Pendente</span>)

       
        return (
            <div className="box box-success">
                <div className="box-body listReport">
                    <Link className="" to={{ pathname: '/showDetailReport', state: report._id }} >
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                                <h3 className="box-title">{ report.title }</h3>
                                <span>Ocorreu dia { fullDate(report.dateOcurr) }</span><br />
                                <span>Cadastrado dia { fullDate(report.dateCreate) }</span><br />
                                <p>{ report.description }</p>
                            {/* <button className="btn btn-primary bottomZero">Ver mais</button> */}
                        </div>
                    </Link>
                    { statusDom }
                </div>
            </div>
        )
    }
    
    return renderDom()
}

export default RowReport