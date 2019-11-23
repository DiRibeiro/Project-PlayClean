import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

// import LineSearchFilter from '../containers/LineSearchFilter'
// import Dropmenu from '../containers/Dropmenu'

import RowCataTreco from '../containers/RowCataTreco'
import { getCataTreco } from '../actions/cataTrecoActions'

const ListCataTreco = () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.cataTreco.list) || undefined

	useEffect(() => {
		dispatch(getCataTreco())
	}, [])

	const renderRows = () => {
		list.map((cataTreco, index) => <RowCataTreco key={index} cataTreco={cataTreco} />)
	}

	if (list !== undefined) return renderRows()
	return (
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