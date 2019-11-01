import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import NewReport from '../reports/NewReport'
// import NewAnimalAdoption from '../Molecules/NewAnimalAdoption'
// import NewAnimalLost from '../Molecules/NewAnimalLost'

import Dashboard from '../template/Dashboard'
// import ListAnimals from '../Organisms/ListAnimal'
import ListReports from '../template/ListReport'
// import AnimalDetail from '../containers/ShowAnimalDetails'
import ReportDetail from '../containers/ShowReportDetails'
import ColetaOrganica from '../containers/ColetaOrganica'
import ColetaSeletiva from '../containers/ColetaSeletiva'
import Contacts from '../Pages/Contacts'
import Perfil from '../template/Perfil'
// import RegisterUser from '../Molecules/RegisterUser'

import App from './App'

export default () => (
    <Router history={ browserHistory }>
        <Route exact path='/' component={ App }>
            <IndexRoute component={ Dashboard } />
            {/* <Route path='registerAnimal' component={ NewAnimalAdoption } /> */}
            <Route path='registerReport' component={ NewReport } />
            {/* <Route path='registerLostAnimal' component={ NewAnimalLost } /> */}
            <Route path='dashboard' component={ Dashboard } />
            {/* <Route path='listAnimal' component={ ListAnimals } /> */}
            <Route path='listReport' component={ ListReports } />
            <Route path='coletaSeletiva' component={ ColetaSeletiva } />
            <Route path='coletaOrganica' component={ ColetaOrganica } />
            {/* <Route path='showDetailAnimal' component={ AnimalDetail } /> */}
            <Route path='showDetailReport' component={ ReportDetail } />
            <Route path='contacts' component={ Contacts } />
            <Route path='perfil' component={ Perfil } />
            {/* <Route path='registerUser' component={ RegisterUser } /> */}
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)