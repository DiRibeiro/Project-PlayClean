import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboard from './dashboardReducer'

const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        dashboard: dashboard
    }
)

export default rootReducer