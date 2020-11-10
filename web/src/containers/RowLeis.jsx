import React from 'react'
import { Link } from 'react-router'
import BASE_URL from '../config/consts'
const RowLeis = props => {
    const renderDom = () => {
        let statusDom
        let lei = props.leis || props
    
        if(lei.status === 0)
            statusDom = (<button className="btn btn-success">Aberta</button>)

        else if(lei.status === 1) 
            statusDom = (<button className="btn btn-dark">Fechada</button>)

        else if(lei.status === 2) 
            statusDom = (<button className="btn btn-warning">Pendente</button>)

        return (
            <div className="box box-success">
                <div className="box-body listLeis">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <h3 className="box-title">{ lei.title }</h3>
                        <span>Tipo de lei {lei.type}</span><br />
                        <p>{ lei.description }</p>
                        <a href={BASE_URL + '/' + lei.file} target='_blank' rel='noopener noreferrer'>ARQUIVO</a>
                    </div>
                    <Link to={{ pathname: '/showDetailLeis', state: lei._id }} >
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