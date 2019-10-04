import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Content from '../templates/content'
import ContentHeader from '../templates/contentHeader'
import { getApresentation, postApresentation } from '../actions/apresentationActions'

export default props => {
    const dispatch = useDispatch()
    const apresentations = useSelector(state => state.apresentation.show)

    useState(() => {
        dispatch(getApresentation())
    }, [])

    const renderRows = () => {
        const show = apresentations || []
        return show.map(ap => (
            <p key={ap._id}>{ap.apresentation}</p>
        ))
    }
        return(
            <div className='box box-success'>
                <ContentHeader title='Apresentação inicial'/>
                <Content>
                <div className="box-body">
                    <div className="row">
                        <form className="col-md-12" onSubmit={ postApresentation } >
                            <label>Descrição da apresentação: </label>
                            <textarea className="form-control" name='apresentation' type='text' rows="10" />
                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary btn-edit"><i className='fa fa-save'/> Alterar</button>
                            </div>
                        </form>
                    
                        <form className="col-md-12" role='form'>
                            <label>Exibir apresentação: </label>
                            <textarea className="form-control" name='apresentation' type='text' rows="10" value={ renderRows() }/>
                        </form>
                    </div>
                </div>
                </Content>
            </div>
        )
    
}