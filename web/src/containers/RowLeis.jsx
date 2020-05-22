import React from 'react'
import { Link } from 'react-router'

const RowLeis = props => {
    const renderDom = () => {
        let statusDom
        let leis = props.leis || props
    
        if(leis.status === 0)
            statusDom = (<button className="btn btn-success">Aberta</button>)

        else if(leis.status === 1) 
            statusDom = (<button className="btn btn-dark">Fechada</button>)

        else if(leis.status === 2) 
            statusDom = (<button className="btn btn-warning">Pendente</button>)

        return (
            <div className="box box-success">
                <div className="box-body listLeis">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ leis.name }</h3>
                        <span>Tipo de lei {leis.group}</span><br />
                        <p>{ leis.description }</p>
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