import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import RowCataTreco from '../containers/RowCataTreco'
import { getCataTreco } from '../actions/cataTrecoActions'

const ListCataTreco = () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.cataTreco.list)

	useEffect(() => {
		dispatch(getCataTreco())
	}, [])

	const renderRows = () => list.map((cataTreco, index) => <RowCataTreco key={index} cataTreco={cataTreco} />)

	return list.length >= 0 ? (
		renderRows()
	) : (
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
	)
}

export default ListCataTreco