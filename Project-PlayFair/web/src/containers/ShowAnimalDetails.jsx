import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setStatus, getListAdoption } from '../actions/animalsActions'
import FormAdoption from '../Molecules/form/FormAdoption'

import { fullDate } from '../helper/date'

const ShowDetailsAnimal = props => {
	const dispatch = useDispatch()
	const animals = useSelector(state => state.animals.list)
	const animal = animals.find(element => element._id === props.location.state) || undefined

	useEffect(() => {
		dispatch(getListAdoption())
	}, [])

	const showStatus = () => {
		if (animal.status === 0)
			// Avaible
			return (
				<button
					className='btn btn-success floatRight'
					data-toggle='modal'
					data-target='#modalAnimalAdoption'>
					Marcar adoção
				</button>
			)
		else if (animal.status === 1)
			// Adopted
			return (
				<button
					className='btn btn-btn-dark floatRight'
					onClick={() =>
						dispatch(
							setStatus({
								status: 0,
								dateAdopted: null,
								phoneWhoAdopted: null,
								_id: animal._id
							})
						)
					}>
					Marcar como disponível
				</button>
			)
	}

	const showImages = () =>
		animal.images.map((pic, index) => (
			<div 
				key={ index }
				className={ `item ${ index === 0 ? 'active' : '' }` }
				style={{ width: '500px' }}>
				<img
					src={ `data:image/png, image/jpeg;, image/jpg;base64, ${ pic }` }
					alt={ `report img ${ index }` } 
					style={{ width: '100%' }} />
			</div>
		))

	const renderIndicators = () =>
		animal.images.forEach((pic, index) => (
			<li
				data-target='#carousel'
				data-slide-to={ index }
				className={ `${ index === 0 ? 'active' : '' }` }></li>
		))

	const handleForm = values => {
		values['status'] = animal.status ? 0 : 1
		values['_id'] = animal._id
		dispatch(setStatus(values))
	}

	return animal !== undefined ? (
		<div className='box box-primary'>
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
					{/* Info */}
					<div className='col-md-6'>
						<div className='col-12'>
							<h2 className='box-title'>
								{ animal.titleNewAnimalForm }
							</h2>
							<span>
								Está conosco desde o dia{ ' ' }
								{ fullDate(animal.dateCreate) }
							</span>
							{ showStatus() }
						</div>
					</div>
					<div className='col-md-6'>
						<b>Vacinas: </b>
						{ animal.vaccinesNewAnimalForm }
						<br />
						<b>Castrado: </b>
						<br />
						<b>Porte: </b>
						{ animal.sizeNewAnimalForm }
						<br />
						<b>Sexo: </b>
						{ animal.sexNewAnimalForm }
						<br />
						<b>Idade: </b>
						{ animal.ageNewAnimalForm }
						<br />
						<b>Endereço: </b>
						{ animal.adressNewAnimalForm }
						<br />
						<b>Telefone: </b>
						{ animal.phoneNewAnimalForm }
						<br />
						<b>E-mail para contato: </b>
						{ animal.emailNewAnimalForm }
						<br />
						<p>{ animal.descriptionNewAnimalForm}</p >
					</div>
				</div>
			</div>
			<div
				className='modal fade'
				id='modalAnimalAdoption'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='animalAdoption'
				aria-hidden='true'>
				<div
					className='modal-dialog modal-dialog-centered'
					role='document'>
					<div className='modal-content' style={{ borderRadius: 4 }}>
						<div
							className='modal-header'
							style={{ paddingBottom: '0px' }}>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Fechar'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div
							className='modal-body'
							style={{ paddingTop: '0px' }}>
							<FormAdoption
								onSubmit={values => handleForm(values)}
							/>
						</div>
						<div className='modal-footer'></div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<>{(window.location = '/listAnimal')}</>
	)
}

export default ShowDetailsAnimal
