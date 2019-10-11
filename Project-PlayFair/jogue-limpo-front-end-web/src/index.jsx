import { applyMiddleware, createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import ReduxToastr from 'react-redux-toastr'
import promise from 'redux-promise'

import reducers from './reducers/reducers'
import Routes from './main/Routes'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={ store } >
        <Routes />
            <ReduxToastr
                timeOut={ 3500 }
                newestOnTop={ false }
                preventDuplicates={ true }
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick />
    </Provider>
, document.getElementById('root'))