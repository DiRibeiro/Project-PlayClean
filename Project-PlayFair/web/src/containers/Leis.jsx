import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { Tabs, Tab } from 'react-bootstrap'
import FormLei from '../reports/form/FormLei'
// import { DateTimePicker } from 'react-widgets'

import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'
// import Button from '../template/Button'

const Leis = (props) => {
    const { handleSubmit } = props
    
    useEffect(() => {
        momentLocaliser(moment)
    }, [])
        
    return (
        <form onSubmit={ handleSubmit } className="form-group" encType="multipart/form-data" >
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className='box-title'>Tipos de Lei</h3>
                </div>
                <div>
                    <Tabs className='showLei' defaultActiveKey="municipais" transition={false} id="noanim-tab-example">
                        <Tab eventKey="municipais" title="Municipais">
                            <div className='box'>
                                <FormLei />
                            </div>
                        </Tab>
                        <Tab eventKey="estaduais" title="Estaduais">
                            
                        </Tab>
                        <Tab eventKey="federais" title="Federais">
                            
                        </Tab>
                    </Tabs>
                </div>
            </div>            
        </form>
    )
}

let LeisRepost = reduxForm({ form: 'newLei' })(Leis)   // A unique identifier for this form	

const selector = formValueSelector('newLei')
LeisRepost = connect(state => {
    const typeReportValue = selector(state, 'typeReport')	
    return { typeReportValue }	
})(LeisRepost)

export default LeisRepost