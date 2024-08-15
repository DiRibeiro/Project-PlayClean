import React, { useEffect } from 'react'
import { useDispatch/* , useSelector */ } from 'react-redux'

//import 'react-widgets/dist/css/react-widgets.css'
import { postColeta, getColeta/* , deleteColeta */ } from '../../actions/coletaActions'
import ColetaForm from '../coletas/ColetaForm'

let Coleta = props => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getColeta());
    }, []);

    const handleForm = values => {
        // console.log(values)
        dispatch(postColeta(values))
    }

    return (
      
        <div>
            <ColetaForm onSubmit={handleForm}></ColetaForm>
        </div>
    )
}

export default Coleta