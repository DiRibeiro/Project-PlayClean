import React, { useEffect }/* , { useState } */ from 'react'
import { useDispatch } from 'react-redux'
import FormLei from './form/FormLei'
import { postLeis } from '../actions/leisActions'

// import FormData from 'form-data'

const Leis = () => {
    const dispatch = useDispatch()
    // const [leis, setLeis]= useState({ type: [] })

    const handleForm = values => {
        console.log("handle laws form")
        dispatch(postLeis(values))
    }

    useEffect(() => {
        console.log("Mounting scene with form")
    }, [])

    return (
        <div>
        <h1>Registro de leis</h1>
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Informe a lei</h3>   {/* eu percebi que isso aqui nao estava aparecendo e por isso consegui achar o erro. */}
            </div>
            <div className="box-body">
                <FormLei 
                    onSubmit={ handleForm }
                    />
            </div>
        </div>
        </div>
    )
}

export default Leis