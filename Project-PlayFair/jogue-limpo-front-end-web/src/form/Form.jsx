import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Form extends Component{
    
    render(){

        const { handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input'/>
                    <Field name='typeReport' component='input'/>
                    <Field name='date' component='input'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-success'>Enviar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'Form'
})(Form)