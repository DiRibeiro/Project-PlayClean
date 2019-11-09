import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import MenuItem from '../template/MenuItem'
import MenuTree from '../template/MenuTree'
// import UserSide from '../containers/UserSide'

// import { tradeTokenToUser, updateToken } from '../actions/userActions'
import { setSidebarEvents, setSidebarReport, setSidebarColletions, setSidebarCataTreco } from '../actions/utilsActions'

export default () => {
	const dispatch = useDispatch()
	// const user = useSelector(state => state.user.personalInfo)
	// const refresh = useSelector(state => state.user.refresh)
	// const userToken = useSelector(state => state.auth.user)

	const reportOpen = useSelector(state => state.utils.sideReportOpen)
	const eventsOpen = useSelector(state => state.utils.sideEventsOpen)
	const collectionsOpen = useSelector(state => state.utils.sideCollectionsOpen)
	const cataTrecoOpen = useSelector(state => state.utils.sideCataTrecoOpen)


	useEffect(() => {
		axios.defaults.headers.common['authorization'] = JSON.parse(localStorage.getItem('jogue_limpo')) // On reaload re-link the auth token to the header common
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

					<li className={ `treeview ${ collectionsOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ collectionsOpen ? 'true' : '' }
							icon='trash'
							label='Coletas'
							onClick={ () => dispatch(setSidebarColletions()) }>
							<MenuItem
								path='ColetaOrganica'
								icon='recycle'
								label='Orgânica' />
							<MenuItem
								path='ColetaSeletiva'
								icon='recycle'
								label='Seletiva' />
							{/* <MenuItem path='registerLostevents' icon='home' label='Cadastrar perdido' /> */}
						</MenuTree>
					</li>

					<li className={ `treeview ${ cataTrecoOpen ? 'menu-open' : '' }` }>
						<MenuTree
							open={ cataTrecoOpen ? 'true' : '' }
							icon='shopping-cart'
							label='Cata-Treco'
							onClick={ () => dispatch(setSidebarCataTreco()) }>
							<MenuItem
									path='cataTreco'
									icon='plus-square'
									label='Agendar' />
							<MenuItem
									path='listCataTreco'
									icon='eye'
									label='Verificar agendamento' />
						</MenuTree>
					</li>

					<MenuItem
						path='contacts'
						icon='phone'
						label='Telefones úteis' />
					{/* <MenuItem
						path='registerUser'
						icon='user'
						label='Registrar usuário' /> */}
				</ul>
			</section>
		</aside>
	)
}