import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboard from './dashboardReducer'
import TabReducer from './tabReducer'
import FormReducer from './formReducer'
import ReportReducer from './reportsReducer'

const rootReducer = combineReducers(
    {
        dashboard: dashboard,
        tab: TabReducer,
        formList: FormReducer,
        form: formReducer,
        reports: ReportReducer,
        toastr: toastrReducer
    }
)

export default rootReducer