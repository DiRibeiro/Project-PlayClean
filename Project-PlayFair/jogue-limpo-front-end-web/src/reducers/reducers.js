import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboard from './dashboardReducer'
import TabReducer from './tabReducer'
import FormReducer from './formReducer'
import reports from './reportsReducer'
import ApresentationReducer from './apresentationReducer'

const rootReducer = combineReducers(
    {
        dashboard: dashboard,
        tab: TabReducer,
        formList: FormReducer,
        form: formReducer,
        reports,
        apresentation: ApresentationReducer,
        toastr: toastrReducer

    }
)

export default rootReducer