import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeis } from '../actions/leisActions'

const ShowLeisDetails = props => { 
	const dispatch = useDispatch()
	const leis = useSelector(state => state.leis.list)
	const lei = leis.find(element => element._id === props.location.state) || undefined
	
	useEffect(() => {
		dispatch(getLeis())
	}, [])
	
	return lei !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					<div className='col-xl-8 col-md-6'>
						<h4>Lei { lei.typeLei }</h4>
						<br/>
						<b>Artigo: </b>
						{ lei.name }
						<br />
						<b>Descrição: </b>
						{ lei.description }
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listLeis') }</>
	)
 }

export default ShowLeisDetails