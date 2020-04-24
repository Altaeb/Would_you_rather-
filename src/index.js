import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middlewares";
import reducers from "./reducers";

const store = createStore(reducers, middleware);
console.log("my store@@@", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);