import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus, getReports } from '../actions/reportActions'

import { fullDate } from '../helper/date'
import { useEffect } from 'react'

const ShowReportDetails = props => { 
	const dispatch = useDispatch()
	const reports = useSelector(state => state.reports.list)
	const report = reports.find(element => element._id === props.location.state) || undefined
	
	useEffect(() => {
		dispatch(getReports())
	}, [])
	
	// const showStatus = () => (
	// 	<div className='showStatus'>
	// 		<button className="btn btn-success showBtn"
	// 			onClick={ () => dispatch(setStatus(0, report._id), window.location='/listReport') }
	// 		>Aberta
	// 		</button>
	// 		<button className="btn btn-dark showBtn"
	// 			onClick={ () => dispatch(setStatus(1, report._id), window.location='/listReport') }
	// 		>Fechada
	// 		</button>
    //     	<button className="btn btn-warning showBtn"
	// 			onClick={ () => dispatch(setStatus(2, report._id), window.location='/listReport') }
				
	// 			>Pendente
	// 			</button>
	// 	</div>
	// )
	
	const showStatus = () => (
		<div className="btn-group showStatus">
			<button type="button" className="btn-badge btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Selecione o status
			</button>
			<div className="dropdown-menu">
				<button className="btn btn-badge btn-success" 
					onClick={ () => dispatch(setStatus(0, report._id), window.location='/listReport') }
				>Aberto</button>
				<button className="btn btn-badge btn-dark" 
					onClick={ () => dispatch(setStatus(1, report._id), window.location='/listReport') }
				>Fechado</button>
				<button className="btn btn-badge btn-warning" 
					onClick={ () => dispatch(setStatus(2, report._id), window.location='/listReport') }
				>Pendente</button>
			</div>
		</div>
	)

	const showImages = () => {
		return report.images.map((img, index) => (

			<div  style= {{ display:'block', height: '33%'}}
				key={ index }
				className={ `item ${ index._id === 0 ? 'active' : '' }` } >
				<img
					src={ `data:image/png;base64, ${ img }` }
					alt={ `report img ${ index._id }` } 
					style={{ width: '100%' }}/>
			</div>
		))
	}

	// const renderIndicators = () => {
	// 	report.images.forEach((img, index) => (
	// 		<li
	// 			data-target='#carousel'
	// 			data-slide-to={ index }
	// 			className={ `${ index === 0 ? 'active' : '' }` }></li>
	// 	))}
		
	return report !== undefined ? (

		<div className='box box-success'>

			<div className='box-body'>
			
				<div className='row'>
					{/* Carroussel */}
			
					<div className='col-md-6'>
						<div className='box box-solid'>
							<div className='box-body'>
								<div
									id='carousel'
									className='carousel slide'
									data-ride='carousel'>
									{/* <ol className='carousel-indicators'>
										{ renderIndicators() }
									</ol> */}
									<div className='carousel-inner'>
										{ showImages() }
									</div>
									{/* <a
										className='left carousel-control'
										href='#carousel'
										data-slide='prev'>
										<span className='fa fa-angle-left'></span>
									</a>
									<a
										className='right carousel-control'
										href='#carousel'
										data-slide='next'>
										<span className='fa fa-angle-right'></span>
									</a> */}
								</div>
							</div>
						</div>
					</div>
					{ /* Info */ }
					<div className='col-xl-8 col-md-6'>
						Esta denúncia está: { showStatus() }
						<h4>Tipo de denúncia: { report.typeReport }</h4>
						<span>
							Cadastrado dia: { fullDate(report.dateCreate)}
						</span>
						<br />
						<span>
							Ocorreu dia: { fullDate(report.dateOcurr) }
						</span>
						<br />
						<br />
						<b>Onde ocorreu: </b>
						{ report.adressOcurr }
						<br />
						{ <h4>Informações sobre o denunciante: </h4> }
						<b>Nome: </b>
						{ report.name }
						<br />
						<b>Telefone: </b>
						{ report.phone }
						<br />
						<b>Descrição: </b>
						{ report.description }
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listReport') }</>
	)
 }

export default ShowReportDetails