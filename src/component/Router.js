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
import Subscribe from "./Subscribe";
import Arcive from "./Arcive"
<<<<<<< HEAD
import {ToastContainer} from "react-toastify";
=======
import { ToastContainer } from "react-toastify";
>>>>>>> 948958d80c603c464580be2aaf880e3eb4a4b57a

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/arcive" component={Shop} />
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
        <Route path='/subscribe' component={Subscribe}/>
<<<<<<< HEAD
        <Route path='/arcive' component={Arcive}/>
        <Route component={App}></Route>
      </Switch>
      {/*<ToastContainer/>*/}
=======
        <Route component={App}></Route>
      </Switch>
      <ToastContainer/>
>>>>>>> 948958d80c603c464580be2aaf880e3eb4a4b57a
    </BrowserRouter>
  );
};
export default Router;
