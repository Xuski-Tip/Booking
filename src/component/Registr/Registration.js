import React from "react";
class Registration extends React.Component {
  render() {
    return (
        <section className='fullscreen '>
             <div className="row fullscreen__background">
                        <div className="col-lg-6   center  background-white b-r-6">
                            <form className="form-transparent-grey fullscreen__container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3>Register New Account</h3>
                                        <p>Create an account by entering the information below. If you are a returning
                                            customer please login at the top of the page.</p>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">First Name</label>
                                        <input type="text" defaultValue="" placeholder="First Name" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Last Name</label>
                                        <input type="text" defaultValue="" placeholder="Last Name" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Username</label>
                                        <input type="text" defaultValue="" placeholder="Username" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Password</label>
                                        <input type="password" defaultValue="" placeholder="Password" className="form-control"/>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="sr-only">Address</label>
                                        <input type="text" defaultValue="" placeholder="Address" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Apartment, suite, unit etc.</label>
                                        <input type="text" defaultValue="" placeholder="Apartment, suite, unit etc."
                                            className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Town / City</label>
                                        <input type="text" defaultValue="" placeholder="Town / City" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">State / County</label>
                                        <input type="text" defaultValue="" placeholder="State / County" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Postcode / Zip</label>
                                        <input type="text" defaultValue="" placeholder="Postcode / Zip" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Email</label>
                                        <input type="text" defaultValue="" placeholder="Email" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label className="sr-only">Phone</label>
                                        <input type="text" defaultValue="" placeholder="Phone" className="form-control"/>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <button className="btn__profit" type="button">Register New Account </button>
                                        <button type="button" className="btn__profit btn__close">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        </section>
    );
  }
}
export default Registration;
