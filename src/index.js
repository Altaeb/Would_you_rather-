import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers"
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middlewares";


const store = createStore(reducers, middleware);
console.log("my store@@@", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);