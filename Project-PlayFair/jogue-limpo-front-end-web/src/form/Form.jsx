import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from './labelAndInput'

class Form extends Component{
    
    render(){
        const { handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput}
                        label=' Nome' cols='6' type='text' icon='user'/>
                    <Field name='phone' component={LabelAndInput}
                        label=' Telefone' cols='3' type='text' icon='phone'/>
                    <Field name='date' component={LabelAndInput}
                        label=' Data da denúncia' cols='3' type='date' icon='calendar'/>
                    <Field name='adressOccured' component={LabelAndInput}
                        label=' Local da denúncia' cols='6' icon='map'/>
                    <Field name='typeReport' component={LabelAndInput}
                        label=' Tipo de denúncia' cols='3' type='option' icon='list'>
                            <select className='form-control select2'>
                                <option selected="selected">Osório</option>
                                <option>Aguapés</option>
                                <option>Albatroz</option>
                                <option>Arroio das Pedras</option>
                                <option>Arroio Grande</option>
                                <option>Atlântida Sul - Dezembro/Março</option>                            
                                <option>Atlântida Sul - Março/Dezembro</option>
                                <option>Baixada</option>
                                <option>Barranceira</option>
                                <option>Borússia</option>
                                <option>Bosque Albatroz</option>
                                <option>Caconde</option>
                                <option>Caiu do Céu</option>
                                <option>Campos de Dentro</option>
                                <option>Caravágio</option>
                                <option>Cascata</option>
                                <option>Centro</option>
                                <option>Costa Verde</option>
                                <option>Distrito Industrial</option>
                                <option>Estrada da Perua</option>
                                <option>Estrada do Mar</option>
                                <option>Estrada do Posto Buffon</option>
                                <option>Estrada Romildo Bolzan</option>
                                <option>Farroupilha</option>
                                <option>Figueira Grande</option>
                                <option>Glória</option>
                                <option>Goiabeira I e II</option>
                                <option>Ilha</option>
                                <option>Interlagos</option>
                                <option>Invernada</option>
                                <option>Jardim da Lagoa</option>
                                <option>Lagoa do Horácio</option>
                                <option>Laranjeiras</option>
                                <option>Livramento</option>
                                <option>Loteamento Serramar</option>
                                <option>Mariápolis</option>
                                <option>Marmeleiro</option>
                                <option>Medianeira</option>
                                <option>Morro das Antenas</option>
                                <option>Palmital</option>
                                <option>Panorâmico</option>
                                <option>Parque da Lagoa</option>
                                <option>Parque de Rodeios</option>
                                <option>Parque do Sol</option>
                                <option>Parque Eólico</option>
                                <option>Parque Real</option>
                                <option>Passinhos</option>
                                <option>Penitenciária Modulada</option>
                                <option>Pitangas</option>
                                <option>Pontal dos Dihel</option>
                                <option>Pór-do-sol</option>
                                <option>Porto Lacustre</option>
                                <option>Rincão</option>
                                <option>RS-030</option>
                                <option>RST-101</option>
                                <option>Santa Luzia</option>
                                <option>Santa Rita</option>
                                <option>Sertão</option>
                                <option>Sindicato Rural</option>
                                <option>Sulbrasileiro</option>
                                <option>Tombadouro</option>
                                <option>Trilhos</option>
                                <option>Várzea do Padre</option>
                                <option>Vila Brasília</option>
                                <option>Vila da Serra</option>
                                <option>Vila dos Pescadores do Passo da Lagoa</option>
                                <option>Vila Emboabas</option>
                                <option>Vila Petrobrás</option>
                                <option>Vila Popular</option>
                            </select>
                    </Field>
                    <Field name='dateOccured' component={LabelAndInput}
                        label=' Data da ocorrência' cols='3' type='date' icon='calendar'/>
                    <Field name='descriptiom' component={LabelAndInput}
                        label=' Descrição da denúncia' type='text' icon='book'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-success'>Enviar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'Form',
    destroyOnUnmount: false
})(Form)