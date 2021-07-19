import React from "react";
import { Link } from "react-router-dom";
import HeaderUpper from "../HeaderUpper";
class Authorization extends React.Component {
  render() {
    return (
      <>
        <HeaderUpper/>
        <section className="fullscreen" data-bg-parallax="images/pages/1.jpg">
          <div className="container">
            <div>
              <div className="row">
                <div className="fullscreen__container col-lg-5 center p-50 background-white b-r-6">
                  <h3>Login to your Account</h3>
                  <form>
                    <div className="form-group">
                      <label className="sr-only">Username or Email</label>
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Username or Email"
                        required
                      />
                    </div>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="form-group form-inline text-left">
                      <div className="form-check">
                        <label>
                          <input type="checkbox" />
                          <small className="m-l-10"> Remember me</small>
                        </label>
                      </div>
                    </div>
                    <div className="text-left form-group">
                      <button type="button" className="btn">
                        Login
                      </button>
                    </div>
                  </form>
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
}
export default Authorization;
