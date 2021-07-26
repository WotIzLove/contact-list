import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

import history from './history'
import reducers from "./store/reducers";
import sagaWatcher  from './store/sagas';

const saga = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
