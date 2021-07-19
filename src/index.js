import React from "react";
import "./css/index.scss";
import ReactDOM from "react-dom"
import Router, { render } from "./component/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { rootReducer } from "./redux/rootReducer";
import "./component/i18next";
import { Suspense } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={(<div>Loading...</div>)}><Router /></Suspense>
    </Provider>

, document.querySelector("#root")
);
