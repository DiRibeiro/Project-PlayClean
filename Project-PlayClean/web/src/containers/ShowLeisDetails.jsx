import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeis } from '../actions/leisActions'

import { useEffect } from 'react'

const ShowLeisDetails = props => { 
	const dispatch = useDispatch()
	const leis = useSelector(state => state.leis.list)
	const lei = leis.find(element => element._id === props.location.state) || undefined
	
	useEffect(() => {
		dispatch(getLeis())
	}, [])
	
	const showStatus = () => (
		<div className='showStatus'>
			<button className="btn btn-success showBtn"
				onClick={ () => dispatch(setStatus(0, lei._id), window.location='/listLeis') }
			>Aberta
			</button>
			<button className="btn btn-dark showBtn"
				onClick={ () => dispatch(setStatus(1, lei._id), window.location='/listLeis') }
			>Fechada
			</button>
        	<button className="btn btn-warning showBtn"
				onClick={ () => dispatch(setStatus(2, lei._id), window.location='/listLeis') }
				
				>Pendente
				</button>
		</div>
    )
    
	return lei !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					<div className='col-xl-8 col-md-6'>
						{ showStatus() }
						<h4>Lei { lei.type }</h4>
						<br/>
						<b>Nome da lei: </b>
						{ lei.nameLei }
						<br />
						<b>Descrição: </b>
						{ lei.descriptionLei }
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listLeis') }</>
	)
 }

export default ShowLeisDetails
