import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, formValueSelector, reset as resetForm} from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'
import LabelAndInput from './labelAndInput'
import Select from './Select'
import { create } from '../actions/reportActions'
import 'react-widgets/dist/css/react-widgets.css'
import { selectTab, showTabs } from '../actions/tabActions'

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
    
    render() {
        const { handleSubmit, pristine, reset, submitting} = this.props
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
                    <Field name='date' component={LabelAndInput}
                        label=' Data da denúncia' cols='3' type='date' icon='calendar'/>
                    <Field name='adressOccured' component={LabelAndInput}
                        label=' Local da denúncia' cols='6' icon='map'/>
                    <Field multiple='' label=' Tipo de denúncia' icon='list' cols='3' component={Select} name='typeReport'>
                    </Field>
                    <Field name='dateOccured' component={LabelAndInput}
                        label=' Data da ocorrência' cols='3' type='date' icon='calendar'/>
                    <Field name='descriptiom' component={LabelAndInput}
                        label=' Descrição da denúncia' type='textarea' icon='book'/>
                </div> 
                <div className='box-footer'>
                    <button 
                        type="button" 
                        disabled={pristine || submitting} 
                        onClick={
                            reset
                        } 
                        className='btn btn-danger btn-edit'>
                            <i className='fa fa-close'/> Limpar</button >
                    <button 
                        type="submit" 
                        disabled={pristine || submitting}
                        onClick={() => {
                            resetForm('Form')
                            selectTab('tabList')
                        }
                        }
                        className='btn btn-success btn-edit'>
                            <i className='fa fa-save'/> Salvar</button >
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
const mapDispatchToProps = dispatch => bindActionCreators({ create, showTabs, selectTab  }, dispatch)

Form = connect(state => {
    // can select values individually
    const typeReportValue = selector(state, 'typeReport')

    return {
        typeReportValue
    }

}, mapDispatchToProps)(Form)

export default Form
