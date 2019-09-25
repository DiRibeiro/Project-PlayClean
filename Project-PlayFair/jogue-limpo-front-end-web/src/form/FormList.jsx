import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getReports, showUpdate } from '../actions/reportActions'

export default props => {

    const dispatch = useDispatch()
    const reports = useSelector(state => state.reports.list)

    useState(() => {
        dispatch(getReports(),
            showUpdate()
        )
    }, [])

    const renderRows = () => {
        const list = reports || []
        return list.map(fr => ( //fr = FormReport
            <tr key={fr._id}>
                <td>{fr.name}</td>
                <td>{fr.typeReport}</td>
                <td>{fr.date}</td>
                <td>
                    <a href='seeMoreReport/:id' className='btn btn-primary' onClick={() => showUpdate(fr)}>
                        <i className='fa fa-eye'></i>
                    </a>
                    <a className='btn btn-warning' onClick={() => showUpdate(fr)}>
                        <i className='fa fa-hourglass'></i>
                    </a>
                    <a className='btn btn-success' onClick={() => showUpdate(fr)}>
                        <i className='fa fa-check'></i>
                    </a>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome do denúnciante</th>
                        <th>Tipo de denúncia</th>
                        <th>Data da criação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )

}