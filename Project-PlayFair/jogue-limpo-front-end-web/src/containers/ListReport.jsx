import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RowReport from './RowReport'
import { getReports } from '../actions/reportActions'

const ListReport = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.reports.list)

    useEffect(() => {
        dispatch(getReports())
    }, [])

    function renderRows() {        
        return list.map(report =>
            <RowReport 
                key={ report._id } 
                name={ report.name }
                typeReport={ report.typeReport } 
                status={ report.status } 
                date={ report.date } 
                description={ report.description } />
        ); 
    }

    return renderRows()
}

export default ListReport