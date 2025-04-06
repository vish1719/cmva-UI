import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
// import reducer from  './components/UserAuth/reducers/auth';
import reducer from './components/UserAuth/store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <HelmetProvider> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);


ReactDOM.render(
  app,
  document.getElementById('root')
);
