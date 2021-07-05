import React from "react";
import HeaderUpper from "../HeaderUpper";
class Registration extends React.Component {
  render() {
    return (
      <>
        <HeaderUpper/>
        <section
          className="fullscreen"
          style={{ backgroundimage: `url("/images/pages/1.jpg")` }}
        >
          <div className="container container-fullscreen">
            <div className="text-middle">
              <div className="row">
                <div className="col-lg-6 center p-40 background-white b-r-6">
                  <form className="form-transparent-grey">
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
                        <label className="sr-only">First Name</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Last Name</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Username</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Username"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Password</label>
                        <input
                          type="password"
                          defaultValue=""
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12 form-group">
                        <label className="sr-only">Address</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Address"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">
                          Apartment, suite, unit etc.
                        </label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Apartment, suite, unit etc./"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Town / City</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Town / City"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">State / County</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="State / County"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Postcode / Zip</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Postcode / Zip"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Email</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="sr-only">Phone</label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Phone"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12 form-group">
                        <button className="btn" type="button">
                          Register New Account{" "}
                        </button>
                        <button type="button" className="btn btn-danger m-l-10">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Registration;
