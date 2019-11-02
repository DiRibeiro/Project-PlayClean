import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import NewReport from '../reports/NewReport'

import Dashboard from '../template/Dashboard'
import ListReports from '../template/ListReport'
import ReportDetail from '../containers/ShowReportDetails'
import ColetaOrganica from '../containers/ColetaOrganica'
import ColetaSeletiva from '../containers/ColetaSeletiva'
import CataTreco from '../containers/CataTreco'
import Photos from '../containers/Photos'
import Contacts from '../Pages/Contacts'
import Perfil from '../template/Perfil'
// import RegisterUser from '../Molecules/RegisterUser'

import App from './App'

export default () => (
    <Router history={ browserHistory }>
        <Route exact path='/' component={ App }>
            <IndexRoute component={ Dashboard } />
            <Route path='registerReport' component={ NewReport } />
            <Route path='dashboard' component={ Dashboard } />
            <Route path='listReport' component={ ListReports } />
            <Route path='coletaSeletiva' component={ ColetaSeletiva } />
            <Route path='coletaOrganica' component={ ColetaOrganica } />
            <Route path='photos' component={ Photos } />
            <Route path='showDetailReport' component={ ReportDetail } />
            <Route path='cataTreco' component={ CataTreco } />
            <Route path='contacts' component={ Contacts } />
            <Route path='perfil' component={ Perfil } />
            {/* <Route path='registerUser' component={ RegisterUser } /> */}
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)