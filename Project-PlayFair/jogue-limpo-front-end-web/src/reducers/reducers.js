import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import dashboard from './dashboardReducer'
import TabReducer from './tabReducer'
import FormReducer from './formReducer'

const rootReducer = combineReducers(
    {
        dashboard: dashboard,
        tab: TabReducer,
        formList: FormReducer,
        form: formReducer
    }
)

export default rootReducer