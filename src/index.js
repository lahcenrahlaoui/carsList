import React from "react";
import ReactDOM from "react-dom/client";

// import css
import "bulma/css/bulma.min.css";
import "./styles.css";

// import app component
import App from "./App";

// importing redux Provider
import { Provider } from "react-redux";
// import our store
import { store } from "./store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
