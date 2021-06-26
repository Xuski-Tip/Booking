import React from "react";
import App from "./App";
import Shop from "./Shop/Shop"
import Basket from "./Basket/Basket"
import Registr from "./Registr/Regist"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/Shop" component={Shop}/>
      <Route exact path="/Basket" component={Basket}/>
      <Route exact path="/Registr" component={Registr}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
