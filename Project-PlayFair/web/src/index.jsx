import { applyMiddleware } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReduxToastr from 'react-redux-toastr'

import reducers from './reducers/reducers'
import Auth from './main/Auth' 
import Routes from './main/Routes' 

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={ store } >
        <>
            <Auth />
            {/* <Routes/> */}
            <ReduxToastr
                timeOut={ 3500 }
                newestOnTop={ true }
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick />
        </>
    </Provider>
, document.getElementById('root'))


/*
    npx react-codemod rename-unsafe-lifecycles
*/