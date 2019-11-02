import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import RowReport from '../containers/RowReport'
import LineSearchFilter from '../containers/LineSearchFilter'
import Dropmenu from '../template/Dropmenu'

import { getReports } from '../actions/reportActions'

export default () => {
	const dispatch = useDispatch()
	const list = useSelector(state => state.reports.list) || undefined

	useEffect(() => {
		dispatch(getReports())
	}, [])

	const renderRows = () =>
		list.map((report, index) => <RowReport key={index} report={report} />)

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
			}} />
	)
}

// /*
// 	return (
// 		<>
// 			<div className='box box-primary' id='boxAnimal'>
// 				<div className='box-body'>
// 					<div className='row'>
// 						<div className='container-fluid'>
// 							<div className='col-10'>
// 								<ul className='ks-cboxtags'>
// 									<LineSearchFilter label='Grave' id='0' />
// 									<LineSearchFilter label='Abigeato' id='1' />
// 									<LineSearchFilter
// 										label='Maus tratos'
// 										id='2' />
// 									<LineSearchFilter label='Abandono' id='3' />
// 									<li>
// 										<Dropmenu ahref='#' label='Status'>
// 											<LineSearchFilter
// 												liDropmenu
// 												itemDropmenu
// 												label='Concluídas'
// 												id='4' />
// 											<LineSearchFilter
// 												liDropmenu
// 												itemDropmenu
// 												label='Pendente'
// 												id='5' />
// 											<LineSearchFilter
// 												liDropmenu
// 												itemDropmenu
// 												label='Fechadas'
// 												id='6' />
// 										</Dropmenu>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{ list !== undefined ? (
// 				renderRows()
// 			) : (
// 				<Loader
// 					type='Oval'
// 					color='#00BFFF'
// 					height={100}
// 					width={100}
// 					style={{
// 						position: 'absolute',
// 						left: '50%',
// 						top: '40%'
// 					}}
// 				/>
// 			) }
// 		</>
// 	)
// }
