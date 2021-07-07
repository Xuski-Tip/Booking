import React from "react";
import { render } from "react-dom";
import "./css/index.scss";
import Router from "./component/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/i18next";
import { Suspense } from "react";
render(<Suspense fallback={(<div>Loading...</div>)}><Router /></Suspense>, document.querySelector("#root"));
