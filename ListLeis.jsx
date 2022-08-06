import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import RowLeis from '../containers/RowLeis'
import { getLeis } from '../actions/leisActions'

const ListLeis = () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.leis.list)

	useEffect(() => {
		dispatch(getLeis())
	}, [])

	const renderRows = () => list.map((leis, index) => <RowLeis key={index} leis={leis} />)

	return list.length > 0 ? (
		renderRows()
	) : (
        <>
        <h1>Nenhum registro</h1>
		{/*
        <Loader
			type='Oval'
			color='#00BFFF'
			height={100}
			width={100}
			style={{
				position: 'absolute',
				left: '50%',
				top: '40%'
			}}
        />
        */}
        </>
	)
}

export default ListLeis