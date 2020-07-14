import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import MenuItem from '../template/MenuItem'
import MenuTree from '../template/MenuTree'
// import UserSide from '../containers/UserSide'

// import { tradeTokenToUser, updateToken } from '../actions/userActions'
import { setSidebarEvents, setSidebarReport, setSidebarColletions, setSidebarCataTreco, setSidebarLei } from '../actions/utilsActions'

export default () => {
	const dispatch = useDispatch()
	// const user = useSelector(state => state.user.personalInfo)
	// const refresh = useSelector(state => state.user.refresh)
	// const userToken = useSelector(state => state.auth.user)

	const reportOpen = useSelector(state => state.utils.sideReportOpen)
	const eventsOpen = useSelector(state => state.utils.sideEventsOpen)
	const cataTrecoOpen = useSelector(state => state.utils.sideCataTrecoOpen)
	const leiOpen = useSelector(state => state.utils.sideLeiOpen)


	useEffect(() => {
        axios.defaults.headers.common['authorization'] = localStorage.getItem('jogue-limpo') // On reaload re-link the auth token to the header common
		// dispatch(updateToken())
		// dispatch(tradeTokenToUser(userToken))
	}, [])

	return (
		<aside className='main-sidebar'>
			<section className='sidebar'>
				{/* <UserSide
					name={ user.firstName }
					img={ user.img }
					type={ user.type }
					refresh={ refresh } /> */}
				<ul className='sidebar-menu' data-widget='tree'>
					{/* <MenuItem path='perfil' icon='user' label='Perfil' /> */}
					<MenuItem path='dashboard' icon='flag' label='Dashboard' />

					<li className={ `treeview ${ reportOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ reportOpen ? 'true' : '' }
							icon='bullhorn'
							label='Denúncias'
							onClick={ () => dispatch(setSidebarReport()) }>
							<MenuItem
								path='listReport'
								icon='eye'
								label='Ver denúncias' />
							<MenuItem
								path='registerReport'
								icon='plus-square'
								label='Cadastrar' />
						</MenuTree>
					</li>

					<li className={ `treeview ${ leiOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ leiOpen ? 'true' : '' }
							icon='balance-scale'
							label='Leis'
							onClick={ () => dispatch(setSidebarLei()) }>
							<MenuItem
								path='listLeis'
								icon='eye'
								label='Ver Leis' />
							<MenuItem
								path='Leis'
								icon='plus-square'
								label='Cadastrar Leis' />
						</MenuTree>
					</li>

					<li className={ `treeview ${ eventsOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ eventsOpen ? 'true' : '' }
							icon='list'
							label='Eventos'
							onClick={ () => dispatch(setSidebarEvents()) }>
							<MenuItem
								path='calendar'
								icon='calendar'
								label='Calendário' />
							<MenuItem
								path='photos'
								icon='photo'
								label='Galeria de fotos' />
							{/* <MenuItem path='registerLostevents' icon='home' label='Cadastrar perdido' /> */}
						</MenuTree>
					</li>

                    <MenuItem path='coleta' icon='recycle' label='Coletas' />
					

					<li className={ `treeview ${ cataTrecoOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ cataTrecoOpen ? 'true' : '' }
							icon='shopping-cart'
							label='Cata-Treco'
							onClick={ () => dispatch(setSidebarCataTreco()) }>
							<MenuItem
									path='registerCataTreco'
									icon='plus-square'
									label='Agendar' />
							<MenuItem
									path='listCataTreco'
									icon='eye'
									label='Verificar agendamento' />
						</MenuTree>
					</li>
				</ul>
			</section>
		</aside>
	)
}