import React from "react";
import App from "./App";
import Shop from "./Shop/Shop";
import Authorization from "./Registr/Authorization";
import Registration from "./Registr/Registration";
import ContactUs from "./Contact Us/ContactUs";
import Card from "./Shop/InfoCard/Card";
import News from "./News/News";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Authorization" component={Authorization} />
        <Route
          exact
          path="/Authorization/Registration"
          component={Registration}
        />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route path="/Shop/Card/:id" component={Card} />
        <Route path="/News" component={News} />
        <Route component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
