import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboard from './dashboardReducer'
import reports from './reportsReducer'
import user from './userReducer'
import auth from './authReducer'
import utils from './utilsReducer'

const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        reports,
        dashboard,
        user,
        auth,
        utils
    }
)

export default rootReducer