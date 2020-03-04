//index.js is the entry point for the application.

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './store/reducers/CombinedReducer.js';
import thunk from 'redux-thunk'

const destination = document.querySelector('#root');

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  destination
);
