import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '../actions/reportActions'

import { fullDate } from '../helper/date'

const MoreDetailsDenuncia = props => { 
	const dispatch = useDispatch()
	const reports = useSelector(state => state.reports.list)
	const report = reports.find(element => element._id === props.location.state) || undefined

	const showStatus = () =>
		report.status ? (
			<button
				className='btn btn-btn-dark floatRight'
				onClick={ () => dispatch(setStatus(0, report._id)) }>
				Fechada
			</button>
		) : (
			<button
				className='btn btn-success floatRight'
				onClick={ () => dispatch(setStatus(1, report._id)) }>
				Aberta
			</button>
		)

	const showImages = () =>
		report.images.map((pic, index) => (
			<div className={ `item ${ index ? 'active' : '' }` }>
				<img
					src={ `data:image/png;base64, ${ pic }` }
					alt={ `Report img ${ index }` }
				/>
			</div>
		))

	const renderIndicators = () =>
		report.images.forEach((pic, index) => (
			<li
				data-target='#carousel'
				data-slide-to={ index }
				className={ `${ index === 1 ? 'active' : '' }` }></li>
		))

	return report !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					{ /* Carroussel */ }
					<div className='col-md-6'>
						<div className='box box-solid'>
							<div className='box-body'>
								<div
									id='carousel'
									className='carousel slide'
									data-ride='carousel'>
									<ol className='carousel-indicators'>
										{ renderIndicators() }
									</ol>
									<div className='carousel-inner'>
										{ showImages() }
									</div>
									<a
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
									</a>
								</div>
							</div>
						</div>
					</div>
					{ /* Info */ }
					<div className='col-6 col-md-6'>
						<h2 className='box-title'>{ report.titleReportForm }</h2>
						{ showStatus() }
						<h4>{ report.typeReport }</h4>
						<span>
							Cadastrado dia: { fullDate(report.dateCreate) }
						</span>
						<br />
						<span>
							Ocorreu dia: { fullDate(report.dateOcurrReport) }
						</span>
						<br />
						<br />
						<b>Onde ocorreu: </b>
						{ report.adressOcurrReportForm }
						<br />
						{ /* <h4>Informações sobre o denunciante: </h4> */ }
						<b>Nome: </b>
						{ report.nameReportForm }
						<br />
						<b>Telefone: </b>
						{ report.phoneReportForm }
						<br />
						<b>CPF: </b>
						{ report.cpfReportForm }
						<br />
						<b>E-mail do denunciante: </b>
						{ report.emailReportForm }
						<br />
						<b>Descrição: </b>
						{ report.descriptionReportForm }
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listReport') }</>
	)
 }

export default MoreDetailsDenuncia
