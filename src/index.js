import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import './styles.css'

import App from "./App";

// adding redux 
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
