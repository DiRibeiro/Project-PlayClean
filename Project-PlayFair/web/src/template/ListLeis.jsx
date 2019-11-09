import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

// import LineSearchFilter from '../containers/LineSearchFilter'
// import Dropmenu from '../containers/Dropmenu'

import RowLeis from '../containers/RowLeis'
import { getListAdoption } from '../actions/animalsActions'

export default () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.animals.list) || undefined

	useEffect(() => {
		dispatch(getListAdoption())
	}, [])

	const renderRows = () =>
		list.map(animal => <RowLeis key={animal._id} animal={animal} />)

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