import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import {HashRouter ,BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <HashRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
