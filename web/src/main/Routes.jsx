import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import NewReport from '../reports/NewReport'
import NewLeis from '../reports/NewLeis'
import NewCataTreco from '../reports/NewCataTreco'

import Dashboard from '../template/Dashboard'
import ListReports from '../template/ListReport'
import ReportDetail from '../containers/ShowReportDetails'
import Coleta from '../containers/coletas/Coleta'
import ListColetas from '../containers/coletas/ListColetas'
import ListCataTreco from '../template/ListCataTreco'
import CataTrecoDetail from '../containers/ShowCataTrecoDetails'
import Photos from '../containers/photos/NewPhotos'
import Calendar from '../containers/todo/todo'
import Leis from '../reports/NewLeis'       
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
            <Route path='coleta' component={ Coleta } />
            <Route path='listColetas' component={ ListColetas } />
            <Route path='leis' component={ Leis } />
            <Route path='listLeis' component={ ListLeis } />
            <Route path='showDetailLeis' component={ LeisDetail } />
            <Route path='calendar' component={ Calendar } />
            <Route path='photos' component={ Photos } />
            <Route path='showDetailReport' component={ ReportDetail } />
            <Route path='listCataTreco' component={ ListCataTreco } />
            <Route path='showDetailCataTreco' component={ CataTrecoDetail } />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)