import React, { useEffect } from 'react'
// import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

import 'react-widgets/dist/css/react-widgets.css'
import { postColeta, getColeta, deleteColeta } from '../actions/coletaActions'
import ColetaForm from './ColetaForm'

let Coleta = props => {
    
    const dispatch = useDispatch()

    const allColetas = useSelector(state => state.coleta.coleta)

    useEffect(() => {
        dispatch(getColeta());
    }, []);

    const handleForm = values => {
        // console.log(values)
        dispatch(postColeta(values))
    }


    const removeColeta = id => {
        dispatch(deleteColeta(id));
    }


    const renderColetas = () => {

        return allColetas.map(coleta => (
            <div key={coleta._id}>
                <h2>{coleta.neighborhood}</h2>
                <h4>{coleta.type === 'organica' ? 'Orgânica' : 'Seletiva'}</h4>
                <p>{coleta.description}</p>
                <button className="btn-danger" onClick={() => removeColeta(coleta._id)}>Remover</button>
                <hr/>
            </div>
        ));

    }

    return (
      
        <div>
            <h1>Gerenciamento de Coletas</h1>
            <hr></hr>
            {renderColetas()}

            <ColetaForm onSubmit={handleForm}></ColetaForm>

        </div>
    )
}

export default Coleta