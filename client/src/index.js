import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// development only axios helpers!
import axios from "axios";
window.axios = axios;

// {} is the initial state
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// #root is the class specified in index.html
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
