import { applyMiddleware, compose } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReduxToastr from 'react-redux-toastr';

import reducers from './reducers/reducers';
import Auth from './main/Auth';
// import Routes from './main/Routes';

// Verifica se o DevTools está disponível e aplica-o, caso contrário, usa `compose` normalmente.
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <>
      <Auth />
      {/* <Routes /> */}
      <ReduxToastr
        timeOut={3500}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </>
  </Provider>
);
