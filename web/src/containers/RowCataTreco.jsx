import React from 'react'
import { Link } from 'react-router'

import { fullDate } from '../helper/date'

const RowCataTreco = props => {
    const renderDom = () => {
        let cataTreco = props.cataTreco || props

        return (
            <div className="box box-success">
                <div className="box-body listCataTreco">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ cataTreco.name }</h3>
                        <span>Cadastrado dia { fullDate(cataTreco.dateCreate) }</span><br />
                        <p>{ cataTreco.description }</p>
                    </div>
                    <Link to={{ pathname: '/showDetailCataTreco', state: cataTreco._id }} >
                        <button className="btn btn-primary bottomZero">Ver mais</button>
                    </Link>
                </div>
            </div>
        )
    }
    
    return renderDom()
}

export default RowCataTreco