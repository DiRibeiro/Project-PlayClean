import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import NewReport from '../reports/NewReport'
import NewLeis from '../reports/NewLeis'
import NewCataTreco from '../reports/NewCataTreco'

import Dashboard from '../template/Dashboard'
import ListReports from '../template/ListReport'
import ReportDetail from '../containers/ShowReportDetails'
import ColetaOrganica from '../containers/ColetaOrganica'
import ColetaSeletiva from '../containers/ColetaSeletiva'
import ListCataTreco from '../template/ListCataTreco'
import CataTrecoDetail from '../containers/ShowCataTrecoDetails'
import Photos from '../containers/Photos'
import Contacts from '../Pages/Contacts'
import Calendar from '../containers/todo/todo'
import Leis from '../reports/form/FormLei'
import ListLeis from '../template/ListLeis'
import LeisDetail from '../containers/ShowLeisDetails'

import App from './App'

export default () => (
    <Router history={ browserHistory }>
        <Route exact path='/' component={ App }>
            <IndexRoute component={ Dashboard } />
            <Route path='registerReport' component={ NewReport } />
            <Route path='registerLeis' component={ NewLeis } />
            <Route path='registerCataTreco' component={ NewCataTreco } />
            <Route path='dashboard' component={ Dashboard } />
            <Route path='listReport' component={ ListReports } />
            <Route path='coletaSeletiva' component={ ColetaSeletiva } />
            <Route path='coletaOrganica' component={ ColetaOrganica } />
            <Route path='leis' component={ Leis } />
            <Route path='listLeis' component={ ListLeis } />
            <Route path='showDetailLeis' component={ LeisDetail } />
            <Route path='calendar' component={ Calendar } />
            <Route path='photos' component={ Photos } />
            <Route path='showDetailReport' component={ ReportDetail } />
            <Route path='listCataTreco' component={ ListCataTreco } />
            <Route path='showDetailCataTreco' component={ CataTrecoDetail } />
            <Route path='contacts' component={ Contacts } />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)