import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus, getCataTreco } from '../actions/cataTrecoActions'

import { fullDate } from '../helper/date'
import { useEffect } from 'react'

const ShowCataTrecoDetails = props => { 
	const dispatch = useDispatch()
	const cataTreco = useSelector(state => state.cataTreco.list)
	const ct = cataTreco.find(element => element._id === props.location.state) || undefined
	
	useEffect(() => {
		dispatch(getCataTreco())
	}, [])
	
	const showStatus = () => (
		<div className='showStatus'>
			<button className="btn btn-success showBtn"
				onClick={ () => dispatch(setStatus(0, ct._id), window.location='/listCataTreco') }
			>Aberta
			</button>
			<button className="btn btn-dark showBtn"
				onClick={ () => dispatch(setStatus(1, ct._id), window.location='/listCataTreco') }
			>Fechada
			</button>
        	<button className="btn btn-warning showBtn"
				onClick={ () => dispatch(setStatus(2, ct._id), window.location='/listCataTreco') }
				
				>Pendente
				</button>
		</div>
	)

	// const showImages = () => {
	// 	ct.images.map((pic, index) => (
	// 		<div 
	// 			key={ index }
	// 			className={ `item ${ index === 0 ? 'active' : '' }` } >
	// 			<img
	// 				src={ `data:image/png; image/jpg; image/jpeg; base64, ${ pic }` }
	// 				alt={ `cataTreco img ${ index }` } 
	// 				style={{ width: '100%' }}/>
	// 		</div>
	// 	))
	// }

	// const renderIndicators = () => {
	// 	ct.images.forEach((pic, index) => (
	// 		<li
	// 			data-target='#carousel'
	// 			data-slide-to={ index }
	// 			className={ `${ index === 0 ? 'active' : '' }` }></li>
	// 	))}

	return ct !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					
					{ /* Info */ }
					<div className='col-xl-8 col-md-6'>
						{ showStatus() }
						<h4>Tipo de denúncia: { ct.typeReport }</h4>
						<span>
							Cadastrado dia: { fullDate(ct.dateCreate) }
						</span>
						<br />
						<span>
							Ocorreu dia: { fullDate(ct.dateOcurr) }
						</span>
						<br />
						<br />
						<b>Onde ocorreu: </b>
						{ ct.adressOcurr }
						<br />
						{ <h4>Informações sobre o denunciante: </h4> }
						<b>Nome: </b>
						{ ct.name }
						<br />
						<b>Telefone: </b>
						{ ct.phone }
						<br />
						<b>Descrição: </b>
						{ ct.description }
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listCataTreco') }</>
	)
 }

export default ShowCataTrecoDetails
