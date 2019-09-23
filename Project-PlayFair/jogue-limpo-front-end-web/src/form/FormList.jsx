import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getReports } from '../actions/reportActions'

export default props => {

    const dispatch = useDispatch()
    const reports = useSelector(state => state.reports.list)

    useState(() => {
        dispatch(getReports())
    }, [])

    const renderRows = () => {
        const list = reports || []
        return list.map(fr => ( //fr = FormReport
            <tr key={fr._id}>
                <td>{fr.name}</td>
                <td>{fr.typeReport}</td>
                <td>{fr.date}</td>
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
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )

}