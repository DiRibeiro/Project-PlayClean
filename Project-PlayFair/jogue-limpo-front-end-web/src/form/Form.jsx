import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
import { DateTimePicker } from 'react-widgets'
import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'
import LabelAndInput from './labelAndInput'
import { create } from '../actions/reportActions'


import Option from '../../node_modules/muicss/lib/react/option'
import Select from '../../node_modules/muicss/lib/react/select'

import 'react-widgets/dist/css/react-widgets.css'

class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {
            momenTT: null
        }
    }

    componentWillMount() {
        this.setState({ momenTT: momentLocaliser(moment) })
    }

    renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
        <DateTimePicker
            onChange={ onChange }
            format="DD MMM YYYY"
            time={ showTime }
            value={ !value ? null : new Date(value) }
            placeholder="Data do ocorrido"
       />
    )

    render() {
        const { handleSubmit } = this.props
        // const { typeReportValue } = this.props

        const phoneMask = createTextMask({
            pattern: '(99) 99999-9999'
        })

        return(
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput}
                        label=' Nome' cols='6' type='text' icon='user'/>
                    <Field {...phoneMask} name='phone' component={LabelAndInput}
                        label=' Telefone' cols='3' type='text' icon='phone'/>
                    <Field name='date' showTime={false}  component={this.renderDateTimePicker} component={LabelAndInput}
                        label=' Data da denúncia' cols='3' type='date' icon='calendar'/>
                    <Field name='adressOccured' component={LabelAndInput}
                        label=' Local da denúncia' cols='6' icon='map'/>
                    <Field name='typeReport' component={LabelAndInput}
                        label=' Tipo de denúncia' cols='3' type='option' icon='list'>
                            <Select component={LabelAndInput} name='typeReport' label=' Tipo de denúncia' cols='3' defaultValue='selected' icon='list'>
                                <Option value="selected" label='Osório' />
                                <Option label='Aguapés' />
                                <Option label='Albatroz' />
                                <Option label='Arroio das Pedras' />
                                <Option label='Arroio Grande' />
                                <Option label='Atlântida Sul - Dezembro/Março' />                            
                                <Option label='Atlântida Sul - Março/Dezembro' />
                                <Option label='Baixada' />
                                <Option label='Barranceira' />
                                <Option label='Borússia' />
                                <Option label='Bosque Albatroz' />
                                <Option label='Caconde' />
                                <Option label='Caiu do Céu' />
                                <Option label='Campos de Dentro' />
                                <Option label='Caravágio' />
                                <Option label='Cascata' />
                                <Option label='Centro' />
                                <Option label='Costa Verde' />
                                <Option label='Distrito Industrial' />
                                <Option label='Estrada da Perua' />
                                <Option label='Estrada do Mar' />
                                <Option label='Estrada do Posto Buffon' />
                                <Option label='Estrada Romildo Bolzan' />
                                <Option label='Farroupilha' />
                                <Option label='Figueira Grande' />
                                <Option label='Glória' />
                                <Option label='Goiabeira I e II' />
                                <Option label='Ilha' />
                                <Option label='Interlagos' />
                                <Option label='Invernada' />
                                <Option label='Jardim da Lagoa' />
                                <Option label='Lagoa do Horácio' />
                                <Option label='Laranjeiras' />
                                <Option label='Livramento' />
                                <Option label='Loteamento Serramar' />
                                <Option label='Mariápolis' />
                                <Option label='Marmeleiro' />
                                <Option label='Medianeira' />
                                <Option label='Morro das Antenas' />
                                <Option label='Palmital' />
                                <Option label='Panorâmico' />
                                <Option label='Parque da Lagoa' />
                                <Option label='Parque de Rodeios' />
                                <Option label='Parque do Sol' />
                                <Option label='Parque Eólico' />
                                <Option label='Parque Real' />
                                <Option label='Passinhos' />
                                <Option label='Penitenciária Modulada' />
                                <Option label='Pitangas' />
                                <Option label='Pontal dos Dihel' />
                                <Option label='Pór-do-sol' />
                                <Option label='Porto Lacustre' />
                                <Option label='Rincão' />
                                <Option label='RS-030' />
                                <Option label='RST-101' />
                                <Option label='Santa Luzia' />
                                <Option label='Santa Rita' />
                                <Option label='Sertão' />
                                <Option label='Sindicato Rural' />
                                <Option label='Sulbrasileiro' />
                                <Option label='Tombadouro' />
                                <Option label='Trilhos' />
                                <Option label='Várzea do Padre' />
                                <Option label='Vila Brasília' />
                                <Option label='Vila da Serra' />
                                <Option label='Vila dos Pescadores do Passo da Lagoa' />
                                <Option label='Vila Emboabas' />
                                <Option label='Vila Petrobrás' />
                                <Option label='Vila Popular' />
                            </Select>
                    </Field>
                    <Field name='dateOccured' showTime={false}  component={this.renderDateTimePicker} component={LabelAndInput}
                        label=' Data da ocorrência' cols='3' type='date' icon='calendar'/>
                    <Field name='descriptiom' component={LabelAndInput}
                        label=' Descrição da denúncia' type='text' icon='book'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-success'><i className='fa fa-save'/> Salvar</button >
                </div>
            </form>
        )
    }
}

Form = reduxForm({
    form: 'Form',
    destroyOnUnmount: false
})(Form)
const selector = formValueSelector('Form')
const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch)

Form = connect(state => {
    // can select values individually
    const typeReportValue = selector(state, 'typeReport')

    return {
        typeReportValue
    }

}, mapDispatchToProps)(Form)

export default Form
