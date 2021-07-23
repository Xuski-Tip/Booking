import React from "react";
import HeaderUpper from "../HeaderUpper";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { login } from "../../redux/Action/registerAction";
import{connect} from "react-redux"  
const Registration = (props) => {
    return (
      <>
        <HeaderUpper />
        <section
          className="fullscreen"
          style={{ backgroundimage: `url("/images/pages/1.jpg")` }}
        >
          <div className="container container-fullscreen">
            <div className="text-middle">
              <div className="row">
                <div className="col-lg-6 center p-40 background-white b-r-6">
                  <AvForm onSubmit={(event, error, value) => props.login(event, error, value, props.history)} className="form-transparent-grey">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>Register New Account</h3>
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                      </div>
                      <div className="col-lg-6 form-group">
                        <AvField
                          label='Name'
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          name="name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <AvField
                          label="password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name="password"
                          required
                        />
                      </div>
                      <div className="col-lg-12 form-group">
                        <AvField
                          label='Email'
                          type="email"
                          placeholder="Email"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-lg-12 form-group">
                        <button className="btn" type="submit">
                          Register New Account{" "}
                        </button>
                        <button type="button" className="btn btn-danger m-l-10">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </AvForm>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default connect(null, {login})(Registration) ;
