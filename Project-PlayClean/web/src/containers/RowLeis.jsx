import React from 'react'
import { Link } from 'react-router'

const RowLeis = props => {
    const renderDom = () => {
        let statusDom
        let leis = props.leis || props
        
        return (
            <div className="box box-success">
                <div className="box-body listLeis">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ leis.nameLei }</h3>
                        <span>Tipo de lei {leis.value}</span><br />
                        <p>{ leis.descriptionLei }</p>
                    </div>
                    <Link to={{ pathname: '/showDetailLeis', state: leis._id }} >
                        <button className="btn btn-primary bottomZero">Ver mais</button>
                    </Link>
                    { statusDom }
                </div>
            </div>
        )
    }
    
    return renderDom()
}

export default RowLeis