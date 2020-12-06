import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus, getReports, deleteReport } from '../actions/reportActions'

import { fullDate } from '../helper/date'
import { useEffect } from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ShowReportDetails = props => { 
	const dispatch = useDispatch()
	const reports = useSelector(state => state.reports.list)
	const report = reports.find(element => element._id === props.location.state) || undefined
	let statusDOM

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	if(report.status === 0)
		statusDOM = (<span className="btn btn-success">Aberta</span>)

	else if(report.status === 1) 
		statusDOM = (<span className="btn btn-danger">Fechada</span>)

	else if(report.status === 2) 
		statusDOM = (<span className="btn btn-warning">Pendente</span>)

	useEffect(() => {
		dispatch(getReports())
	}, [])
	
	const removeReport = id => {
		dispatch(deleteReport(id), window.location='/listReport');
	}

	const showStatus = () => (
		<div className="btn-group">
			<button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{/* {console.log('aqui', report.status)} */}
				{statusDOM}
			</button>
			
			<div className="dropdown-menu">
				<button className="btn btn-success" 
					onClick={ () => dispatch(setStatus(0, report._id), window.location='/listReport') }
				>Aberto</button>
				<button className="btn btn-danger" 
					onClick={ () => dispatch(setStatus(1, report._id), window.location='/listReport') }
				>Fechado</button>
				<button className="btn btn-warning" 
					onClick={ () => dispatch(setStatus(2, report._id), window.location='/listReport') }
				>Pendente</button>
			</div>
		</div>
	)
	
	const showImages = () => {
		return report.images.map((img, index) => (

			<div  style= {{ /* display:'block', */ height: '33%'}}
				key={ index }
				className={ `item ${ index === 0 ? 'active' : '' }` } >
				<img
					src={ `data:image/png;base64, ${ img }` }
					alt={ `report img ${ img }` } 
					style={{ width: '100%' }}/>
					{/* {console.log(report.images[0])} */}
			</div>
		))
	}

	const renderIndicators = () => {
		report.images.forEach((img, index) => (
			<li
				data-target={img}
				data-slide-to={ index }
				className={ `${ index === 0 ? 'active' : '' }` }></li>
		))}
		
	return report !== undefined ? (

		<div className='box box-success'>

			<div className='box-body'>
			
				<div className='row'>
					{/* Carroussel */}
					<div className='col-md-4'>
						<div className='box box-solid'>
							<div className='box-body'>
								<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
					<div className='col-xl-8 col-md-6'>
						Trocar status para: { showStatus() }
						<h4><strong>Tipo de denúncia:</strong> { report.typeReport }</h4>
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
					<div className="btn-remove">
						<button 
							className="btn btn-danger btn-delete" 
							variant="outlined" 
							onClick={handleClickOpen}>
							<i className='fa fa-trash-o'></i>
						</button>
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">{"Deseja apagar esta denúncia?"}</DialogTitle>
							{/* <DialogContent>
							<DialogContentText id="alert-dialog-description">
								Você está prestes a deletar uma denúncia, gostaria de continuar?
							</DialogContentText>
							</DialogContent> */}
							<DialogActions className='btn-dialog'>
							<button className="btn btn-danger" onClick={handleClose}>
								Não
							</button>
							<button className="btn btn-success" onClick={ () => removeReport(report._id)} autoFocus>
								Sim
							</button>
							</DialogActions>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{ (window.location = '/listReport') }</>
	)
 }

export default ShowReportDetails