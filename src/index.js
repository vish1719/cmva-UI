import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './components/UserAuth/store/reducers/auth';
import { BrowserRouter } from 'react-router-dom';  // ✅ BrowserRouter

import 'bootstrap/dist/css/bootstrap.min.css';

// Redux devtools setup
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter> {/* ✅ Use BrowserRouter directly */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
