import React from "react";
import { Link } from "react-router-dom";
import HeaderUpper from "../HeaderUpper";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {avtorizatsiya} from "../../redux/Action/loginAction";

const Authorization = (props) => {

    return (
      <>
        <HeaderUpper/>
        <section className="fullscreen" data-bg-parallax="images/pages/1.jpg">
          <div className="container">
            <div>
              <div className="row">
                <div className="fullscreen__container col-lg-5 center p-50 background-white b-r-6">
                  <h3>Login to your Account</h3>
                  <AvForm onSubmit={ (event, errors, values) => props.avtorizatsiya(event, errors, values, props.history)}>
                    {/*<div className="form-group">*/}
                      {/*<label className="sr-only">Username or Email</label>*/}
                      <AvField
                        type="email"
                        name="email"
                        label="Email"
                        className="form-control"
                        // autoComplete="off"
                        placeholder="Username or Email"
                        required
                      />
                    {/*</div>*/}
                    {/*<div className="form-group m-b-5">*/}
                      {/*<label className="sr-only">Password</label>*/}
                      <AvField
                        type="password"
                        name="password"
                        label="password"
                        className="form-control"
                        // autoComplete="off"
                        placeholder="Password"
                        required
                      />
                    {/*</div>*/}
                    {/*<div className="form-group form-inline text-left">*/}
                    {/*  <div className="form-check">*/}
                    {/*    <label>*/}
                    {/*      <input type="checkbox" />*/}
                    {/*      <small className="m-l-10"> Remember me</small>*/}
                    {/*    </label>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    {/*<div className="text-left form-group">*/}
                      <button type="submit" className="btn">
                        Login
                      </button>
                    {/*</div>*/}
                  </AvForm>
                  <p className="small">
                    Don't have an account yet?{" "}
                    <Link to="Authorization/Registration">
                      Register New Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );

}
export default connect(null, {avtorizatsiya})(Authorization) ;
