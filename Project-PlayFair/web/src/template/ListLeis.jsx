import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import LineSearchFilter from '../containers/LineSearchFilter'
import Dropmenu from '../containers/Dropmenu'

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
/*
	return (
		<>
			<div className='box box-primary' id='boxAnimal'>
				<div className='box-body'>
					<div className='row'>
						<div className='container-fluid'>
							<div className='col-sm-11 col-md-10 col-lg-10 col-xl-9 pl-0'>
								<ul className='ks-cboxtags'>
									<li>
										<Dropmenu ahref='#' label='Espécie'>
											<LineSearchFilter
												itemDropmenu
												liDropmenu
												label='Cão'
												id='1'
											/>
											<LineSearchFilter
												itemDropmenu
												liDropmenu
												label='Gato'
												id='2'
											/>
										</Dropmenu>
									</li>
									<LineSearchFilter label='Castrado' id='3' />
									<LineSearchFilter label='Vacinado' id='4' />
									<li>
										<Dropmenu ahref='#' label='Porte'>
											<LineSearchFilter
												itemDropmenu
												liDropmenu
												label='Pequeno'
												id='5'
											/>
											<LineSearchFilter
												itemDropmenu
												liDropmenu
												label='Médio'
												id='6'
											/>
											<LineSearchFilter
												itemDropmenu
												liDropmenu
												label='Grande'
												id='7'
											/>
										</Dropmenu>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{ list !== undefined ? (
				renderRows()
			) : (
				<Loader
					type='Oval'
					color='#00BFFF'
					height={ 100 }
					width={ 100 }
					style={{
						position: 'absolute',
						left: '50%',
						top: '40%'
					}}
				/>
			) }
		</>
	)
}
*/
