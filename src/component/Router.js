import React from "react";
import App from "./App";
import Shop from "./Shop/Shop"
import Authorization from "./Registr/Authorization"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/Shop" component={Shop}/>
      <Route exact path="/Authorization" component={Authorization}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
