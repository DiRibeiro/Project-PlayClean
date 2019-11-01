import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormRegisterAnimal from './form/FormRegisterAnimal'
import { postAnimalAdoption } from '../actions/animalsActions'

const NewAnimal = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState({ images: [] })

    const fileSelectedHandler = event => {
        let images = files['images']
        Object.values(event.target.files).map(picture => images.push(picture))
        setFiles({ images })
    }

    const handleForm = values => {
        const fd = new FormData()

        if (files.images !== undefined)
            files.images.forEach(img => fd.append('images', img))

        for (let key in values)
            if (values.hasOwnProperty(key))
                fd.append(key, values[key])

        setFiles({ images: [] })
        dispatch(postAnimalAdoption(fd))
    }

    return (
        <div className="box box-primary">
            <div className="box-header with-border">
                <h3 className="box-title">Cadastro de animal para adoção</h3>
                <h5 className="description">*30 dias por anúncio de doação/adoção de animais, depois, o registro é dado como inativo. Então, será enviado um pedido de reativação por e-mail, caso seja respondido, o anúncio é reaberto por mais 30 dias;</h5>
            </div>
            <div className="box-body">
                <FormRegisterAnimal
                    onSubmit={ values => handleForm(values) }
                    handleImage = { values => fileSelectedHandler(values) } 
                    images={ files['images'] } />
            </div>
        </div>
    )
}

export default NewAnimal
