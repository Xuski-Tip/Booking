import React, { Suspense } from "react";
import "./css/index.scss";
import ReactDOM from "react-dom";
import Router from "./component/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/i18next";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router />
  </Suspense>,
  document.querySelector("#root")
);
