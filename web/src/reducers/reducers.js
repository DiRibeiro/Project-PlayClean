import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboard from './dashboardReducer'
import dashboardCt from './dashboardCtReducer'
import reports from './reportsReducer'
import user from './userReducer'
import auth from './authReducer'
import utils from './utilsReducer'
import calendar from './calendarReducer'
import cataTreco from './cataTrecoReducer'
import leis from './leisReducer'
import photos from './photosReducer'
import coleta from './coletaReducer'


const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        reports,
        todo: calendar,
        leis,
        coleta,
        photos,
        cataTreco,
        dashboard,
        dashboardCt,
        user,
        auth,
        utils
    }
)

export default rootReducer