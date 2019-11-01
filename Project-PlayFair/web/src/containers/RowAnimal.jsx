import React from 'react'
import { Link } from 'react-router'

import { fullDate } from '../helper/date'

const RowReport = props => {    
    const renderDom = () => {
        let statusDom
        let animal = props.animal || props

        if(animal.status === 0)
            statusDom = (<button className="btn btn-success">Disponível</button>)

        else if(animal.status === 1) 
            statusDom = (<button className="btn btn-dark">Adotado</button>)

        else if(animal.status === 2) 
            statusDom = (<button className="btn btn-warning">Interesse</button>)

        return (
            <div className="box box-primary">
                <div className="box-body">
                    <div className="col-4 col-sm-12 col-md-4 col-lg-3 col-xl-4">
                        <img className="img-responsive" src={ `data:image/png;base64, ${ animal.images !== undefined ? animal.images[0] : '' } `} alt="Animal" />
                    </div>
                    <div className="col-7 col-sm-10 col-md-7 col-lg-7 col-xl-7">
                        <div className="row">
                            <h3 className="box-title">{ animal.titleNewAnimalForm || animal.name }</h3>
                            <span>Está conosco desde o dia { fullDate(animal.dateCreate) }</span>
                            <p>{ animal.descriptionNewAnimalForm }</p>                
                        </div>
                    </div>
                    <Link to={{ pathname: '/showDetailAnimal', state: animal._id }} >
                        <button className="btn btn-primary bottomZero">Ver mais</button>
                    </Link>
                    { statusDom }
                </div>
            </div>
        )
    }

    return renderDom()
}

export default RowReport

/*
<button className="btn btn-success">Disponív.</button>
<button className="btn btn-dark">Adotado</button>
<button className="btn btn-warning">Interes.</button>

onClick={  }
*/
