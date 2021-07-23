import React from "react";
import App from "./App";
import Shop from "./Shop/Shop";
import Authorization from "./Registr/Authorization";
import Registration from "./Registr/Registration";
import ContactUs from "./Contact Us/ContactUs";
import Card from "./Shop/InfoCard/Card";
// import News from "./News/News";
import Editor from "./Staff/Editor"
import Members from "./Staff/Members"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import NotFound from "./NotFound";
import Leadership from "./Jurnal/Leadership";
import Requirimend from "./article/requirimend";
import ArticleLayout from "./article/articleLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/arcive" component={Shop} />
        <Route exact path="/authorization" component={Authorization} />
        <Route exact path="/authorization/registration"
          component={Registration}
        />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/shop/card/:id" component={Card} />
        {/*<Route path="/News" component={News} />*/}
        <Route exact path='/staff/editor' component={Editor}/>
        <Route exact path='/leadership' component={Leadership}/>
        <Route exact path='/staff/members' component={Members}/>
        <Route exact path='/requirimend' component={Requirimend}/>
        <Route exact path='/layout' component={ArticleLayout}/>
        <Route component={NotFound}></Route>
      </Switch>
      <ToastContainer/>
    </BrowserRouter>
  );
};
export default Router;
