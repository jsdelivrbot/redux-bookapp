/*
  redux provides us the application state and the react provides us the application UI
  for the state and the both are totally disconnected and we connect them through the
  react-redux library.
  Our application state is created by application reducers and there can be one reducers
  or many reducers and the they can be converted to one reducers with the help of combineReducers
  and then they can be passed to createStore function with first argument the reducers and second
  optional parameter the initial state.

*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import rootReducers
import rootReducers from './reducers';
// import App
import App from './components/app'

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(rootReducers)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.container'));
