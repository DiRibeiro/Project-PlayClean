import React, { useState, useEffect }/* , { useState } */ from 'react'
import { useDispatch } from 'react-redux'
import FormLei from './form/FormLei'
import { postLeis } from '../actions/leisActions'

import FormData from 'form-data'

const Leis = (props) => {

    const dispatch = useDispatch()
    
    const [file, setFile] = useState();

    const fileSelectedHandler = event => {
        console.log(event.target.files[0])
        setFile(event.target.files[0]);
    }

    const handleForm = values => {
        const fd = new FormData()
        console.log(values)
        console.log(file)
        
        for (let key in values)
            if (values.hasOwnProperty(key)) {
                fd.append(key, values[key])
                console.log("key", key, "value", values[key])
            }

            //let fileObj = {uri: file, originalname: 'law', type: 'pdf'};
            console.log("File to send: ", file 
            )
        fd.append('document', file);
        
        setFile("")
        dispatch(postLeis(fd, props.router))
        //window.location = '/listLeis'
    }

    useEffect(() => {
        console.log("Mounting scene with form")
        setFile();
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
                    onSubmit={ values => handleForm(values) }
                    handleDocument = {value => fileSelectedHandler(value)}
                    />
            </div>
        </div>
        </div>
    )
}

export default Leis