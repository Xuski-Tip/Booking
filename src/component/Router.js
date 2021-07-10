import React from "react";
import App from "./App";
import Shop from "./Shop/Shop";
import Authorization from "./Registr/Authorization";
import Registration from "./Registr/Registration";
import ContactUs from "./Contact Us/ContactUs";
import Card from "./Shop/InfoCard/Card";
import News from "./News/News";
import Editor from "./Staff/Editor"
import Members from "./Staff/Members"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SubmitingJurnal from "./SubmitingJurnal";

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
        <Route path='/staff/Editor' component={Editor}/>
        <Route path='/staff/Members' component={Members}/>
        <Route path="/SubmitingJurnal" component={SubmitingJurnal}/>
        <Route component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
