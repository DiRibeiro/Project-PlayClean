import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import RowAnimal from '../containers/RowAnimal'
import RowReport from '../containers/RowReport'
import FormChangeAccount from '../reports/form/FormChangeAccount'

import { updateUser, updateToken } from '../actions/userActions'
import { getReports } from '../actions/reportActions'
import { getListAdoption } from '../actions/animalsActions'

import { fullDate } from '../helper/date'

const Perfil = () => { 
	const dispatch = useDispatch()

	const user = useSelector(state => state.user.personalInfo) || undefined
	const reports = useSelector(state => state.reports.list) || undefined
	const animals = useSelector(state => state.animals.list) || undefined

	const [show, setShow] = useState(0)
	const [totalAdopted, setTotalAdopted] = useState(0)

	useEffect(() => { 
		dispatch(getReports())
		dispatch(getListAdoption())
		dispatch(updateToken())
	}, [])

	useEffect(() => { 
		let itens = Object.values(user.animalsAdoption)
		let totalAdopted2 = animals.filter(element => itens.includes(element._id) && element.status === 1)
		setTotalAdopted(totalAdopted2.length)
	}, [animals, user])

	const handleSubmit = values => dispatch(updateUser(values))

	const renderReports = () => { 
		let itens = Object.values(user.reports)
		return reports.map(element => { 
			if (itens.includes(element._id))
				return <RowReport key={ element._id } report={ element } />
			return null
		})
	}

	const renderAnimals = () => { 
		let itens = Object.values(user.animalsAdoption)
		return animals.map(element => { 
			if (itens.includes(element._id))
				return (
					<RowAnimal
						key={ element._id }
						img={ '/animals/dog1.jpeg' }
						animal={ element } />
				)
			return null
		})
	}

	const renderAnimalsAdopted = () => { 
		let itens = Object.values(user.animalsAdoption)
		return animals.map(element => { 
			if (itens.includes(element._id) && element.status === 1) { 
				return (
					<section className='content' key={ element._id }>
						<div className='row'>
							<div className='user-block'>
								<img
									className='img-circle img-bordered-sm'
									src='../img/no_perfil_image_2.png'
									alt='Foto de perfil do usuário'
								/>
								<span className='username'>
									<a href='dashboard'>{ element.whoAdopted }</a>
								</span>
								<span className='description'>
									Adotado dia: { fullDate(element.dateAdopted) }
								</span>
								<span className='description'>
									Contato: { element.phoneWhoAdopted }
								</span>
							</div>
							<RowAnimal
								key={ element._id }
								img={ '/animals/dog1.jpeg' }
								animal={ element }
							/>
						</div>
					</section>
				)
			}
			return null
		})
	}

	const renderChangeAccount = () => <FormChangeAccount onSubmit={ values => handleSubmit(values) } />

	return (
		<>
			<div className='col-md-3'>
				<div className='box box-success'>
					<div className='box-body box-profile'>
						<img
							className='profile-user-img img-responsive img-circle imgUserCard'
							src={ user.img }
							alt='Foto de perfil do usuário'
						/>
						<h3 className='profile-username text-center'>
							{ user.firstName }
						</h3>
						<p className='text-muted text-center'>{ user.type }</p>
						<h5 className='mt-5'>Atividade</h5>
						<ul className='list-group list-group-unbordered'>
							<li className='list-group-item'>
								<b>Denúncias</b>{ ' ' }
								<small className='pull-right'>
									{ user.reports.length }
								</small>
							</li>
							<li className='list-group-item'>
								<b>Animais</b> cadastrados{ ' ' }
								<small className='pull-right'>
									{ user.animalsAdoption.length }
								</small>
							</li>
							<li className='list-group-item'>
								<b>Animais</b> já adotados{ ' ' }
								<small className='pull-right'>
									{ totalAdopted }
								</small>
							</li>
						</ul>
						<h5>
							<button
								onClick={ () => setShow(3) } 
								className='btnHref' >
								<i className='fa fa-cog'></i> Configurações da conta
							</button>
						</h5>
					</div>
				</div>
			</div>
			<div className='col-md-9'>
				<div className='nav-tabs-custom'>
					<ul className='nav nav-tabs'>
						<li className={ `${ show === 0 ? 'active' : '' }` }>
							<button
								onClick={ () => setShow(0) }
								className='btnNav' >
								Denúncias
							</button>
						</li>
						<li className={ `${ show === 1 ? 'active' : '' }` }>
							<button 
								className='btnNav'
								onClick={ () => setShow(1) }>
								Animais cadastrados
							</button>
						</li>
						<li className={ `${ show === 2 ? 'active' : '' }` }>
							<button 
								className='btnNav'
								onClick={ () => setShow(2) }>
								Animais já adotados
							</button>
						</li>
						<li className={ `${ show === 3 ? 'active' : '' }` }>
							<button 
								className='btnNav'
								onClick={ () => setShow(3) }>
								Conta
							</button>
						</li>
					</ul>
					{ user !== undefined && reports !== undefined && animals !== undefined ? (
						<div className='tab-content'>
							<div style={{ display: `${ show === 0 ? 'block' : 'none' }` }}>
								<div className='post'>{ renderReports() }</div>
							</div>
							<div style={{ display: `${ show === 1 ? 'block' : 'none' }` }}>
								<div className='post'>{ renderAnimals() }</div>
							</div>
							<div style={{ display: `${ show === 2 ? 'block' : 'none' }` }}>
								<div className='post'>
									{ renderAnimalsAdopted() }
								</div>
							</div>
							<div style={{ display: `${ show === 3 ? 'block' : 'none' }` }}>
								<div className='post'>
									{ renderChangeAccount() }
								</div>
							</div>
						</div>
					) : (
						<Loader
							type='Oval'
							color='#00BFFF'
							height={ 100 }
							width={ 100 }
							style={ { 
								position: 'absolute',
								left: '50%',
								top: '250%',
								marginLeft: '-50px'
							} }
						/>
					) }
				</div>
			</div>
		</>
	)
}
export default Perfil