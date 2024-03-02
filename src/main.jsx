import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import "modern-normalize";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "react-";
import {persistor}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor= {persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);