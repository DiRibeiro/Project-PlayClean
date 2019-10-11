import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import {Provider} from 'redux'

import '../util/dependences'

//import Login from './Login'

import FormReport from '../form/FormReport'
import Dashboard from '../components/Dashboard'
import Leis from '../containers/Leis'
import ListLeis from '../containers/ListLeis'
import ListReport from '../containers/ListReport'
import MoreDetailsDenuncia from '../containers/MoreDetailsDenuncia'
import ColetaSeletiva from '../containers/ColetaSeletiva'
import ColetaOrganica from '../containers/ColetaOrganica'
import Photos from '../containers/Photos'
import Apresentation from '../containers/Apresentation'
import Calendar from '../containers/Calendar'

import App from './App'

export default props => (
    <Router history={ browserHistory }>
        <Route exact path='/' component={props => <App {...props} />} >
            <IndexRoute component={props => <Dashboard {...props} />} />
            <Route path='formReport' component={ FormReport }component={props => <FormReport {...props} />} />
            <Route path='apresentation' component={props => <Apresentation {...props} />} />
            <Route path='leis' component={props => <Leis {...props} />} />
            <Route path='listLeis' component={props => <ListLeis {...props} />} />
            <Route path='listReport' component={props => <ListReport {...props} />} />
            <Route path='seeMoreReport' component={props => <MoreDetailsDenuncia {...props} />} />
            <Route path='coletaSeletiva' component={props => <ColetaSeletiva {...props} />} />
            <Route path='coletaOrganica' component={props => <ColetaOrganica {...props} />} />
            <Route path='photos' component={props => <Photos {...props} />} />
            <Route path='calendar' component={props => <Calendar {...props} />} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
