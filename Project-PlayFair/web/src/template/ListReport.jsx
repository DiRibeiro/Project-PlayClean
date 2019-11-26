import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import RowReport from '../containers/RowReport'

import { getReports } from '../actions/reportActions'

const ListReport = () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.reports.list) || undefined

	useEffect(() => {
		// dispatch(getReports())
	}, [])

	const renderRows = () => {
		list.map((report, index) => <RowReport key={index} report={report} />)
	}

	// return <h1>HELLOE</h1>

	return list === undefined ?
		<h1>hello</h1>
		// <Loader
		// 	type='Oval'
		// 	color='#00BFFF'
		// 	height={100}
		// 	width={100}
		// 	style={{
		// 		position: 'absolute',
		// 		left: '50%',
		// 		top: '40%'
		// 	}}
		// />
	: renderRows()
}

export default ListReport
