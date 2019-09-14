import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import '../components/dependences'

//import Login from './Login'
import page2 from '../templates/page2'
import FormReport from '../form/FormReport'
import Dashboard from '../components/Dashboard'
import Leis from '../containers/Leis'
import ListLeis from '../containers/ListLeis'
import ListReport from '../containers/ListReport'
import MoreDetailsDenuncia from '../containers/MoreDetailsDenuncia'
import FormRegisterDenuncia from '../form/FormRegisterDenuncia'
import ColetaSeletiva from '../containers/ColetaSeletiva'
import ColetaOrganica from '../containers/ColetaOrganica'
import Photos from '../containers/Photos'
import Apresentation from '../containers/Apresentation'
//import Calendar from '../containers/Calendar'

import App from './App'

export default props => (
    <Router history={ browserHistory }>
        <Route exact path='/' component={ App }>
            <IndexRoute component={ Dashboard } />
            <Route path='page2' component={ page2 } />
            <Route path='registerDenuncia' component={ FormRegisterDenuncia } />
            <Route path='editReport' component={ FormReport } />
            <Route path='apresentation' component={ Apresentation } />
            <Route path='leis' component={ Leis} />
            <Route path='listLeis' component={ ListLeis } />
            <Route path='listReport' component={ ListReport } />
            <Route path='seeMoreReport' component={ MoreDetailsDenuncia } />
            <Route path='coletaSeletiva' component={ ColetaSeletiva} />
            <Route path='coletaOrganica' component={ ColetaOrganica} />
            <Route path='photos' component={ Photos} />
            <Route /*path='/calendar' component={ Calendar} *//>
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
