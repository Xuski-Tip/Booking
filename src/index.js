import React from "react";
import { render } from "react-dom";
import "./css/index.scss"
import Router from './component/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
render(<Router />, document.querySelector("#root"));
