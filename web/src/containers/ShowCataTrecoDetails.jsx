import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus ,getCataTreco } from '../actions/cataTrecoActions'

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
				onClick={ () => dispatch(setStatus(0, cataTreco._id), window.location='/listCataTreco') }
			>Agendado
			</button>
			<button className="btn btn-dark showBtn"
				onClick={ () => dispatch(setStatus(1, cataTreco._id), window.location='/listCataTreco') }
			>Realizado
			</button>
        	<button className="btn btn-warning showBtn"
				onClick={ () => dispatch(setStatus(2, cataTreco._id), window.location='/listCataTreco') }
			>Pendente
			</button>
		</div>
	)

	return ct !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					
					{ /* Info */ }
					<div className='col-xl-8 col-md-6'>
					{ showStatus() }
						<h4>Cata-Treco</h4>
						<br />
						<span>
							Cadastrado dia: { fullDate(ct.dateCreate) }
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
						<b>Cpf: </b>
						{ ct.cpf }
						<br />
						<b>Local: </b>
						{ ct.local }
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