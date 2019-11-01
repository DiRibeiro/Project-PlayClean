import React, { Component } from 'react'

import FormLostAnimal from './form/FormLostAnimal'

class NewAnimal extends Component {
    render () {
        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Cadastro de animal perdido</h3>
                    <h5 className="description">*30 dias por anúncio de doação/adoção de animais, depois, o registro é dado como inativo. Então, será enviado um pedido de reativação por e-mail, caso seja respondido, o anúncio é reaberto por mais 30 dias;</h5>
                </div>
                <div className="box-body">
                    <FormLostAnimal onSubmit={ this.handleSubmit } />
                </div>
            </div>
        )
    }
}

export default NewAnimal
