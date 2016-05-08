/* Main APP */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import RootReducer from './reducers';
import App from './containers/App';
import initialState from './data/initial_state';

export const IMGUR_API_KEY = '3695877dea1e85a';

// global app css
require('!style!css!sass!./assets/theme/index.scss');

render (
  /* Rexu Dev Tool extension, this uses chrome redux dev tools extension, put and setup in project to work in all browsers */
  <Provider store={createStore(RootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined)}>
    <App />
  </Provider>,
  document.querySelector('.app-container')
);
