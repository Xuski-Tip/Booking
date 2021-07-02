import React from "react";
class Registration extends React.Component {
  render() {
    return (
        // <section classNameName='fullscreen '>
        //      <div classNameName="row fullscreen__background">
        //                 <div classNameName="col-lg-6   center  background-white b-r-6">
        //                     <form classNameName="form-transparent-grey fullscreen__container">
        //                         <div classNameName="row">
        //                             <div classNameName="col-lg-12">
        //                                 <h3>Register New Account</h3>
        //                                 <p>Create an account by entering the information below. If you are a returning
        //                                     customer please login at the top of the page.</p>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">First Name</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="First Name" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Last Name</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Last Name" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Username</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Username" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Password</label>
        //                                 <input type="password" defaultdefaultValue="" placeholder="Password" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-12 form-group">
        //                                 <label classNameName="sr-only">Address</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Address" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Apartment, suite, unit etc.</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Apartment, suite, unit etc."
        //                                     classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Town / City</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Town / City" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">State / County</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="State / County" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Postcode / Zip</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Postcode / Zip" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Email</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Email" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-6 form-group">
        //                                 <label classNameName="sr-only">Phone</label>
        //                                 <input type="text" defaultdefaultValue="" placeholder="Phone" classNameName="form-control"/>
        //                             </div>
        //                             <div classNameName="col-lg-12 form-group">
        //                                 <button classNameName="btn__profit" type="button">Register New Account </button>
        //                                 <button type="button" classNameName="btn__profit btn__close">Cancel</button>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        // </section>
        <section className="fullscreen" style={{backgroundimage: `url("/images/pages/1.jpg")`}}>
        <div className="container container-fullscreen">
            <div className="text-middle">
                <div className="text-center m-b-30">
                    <a href="index.html" className="logo">
                        <img src="images/logo-dark.png" alt="Polo Logo"/>
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-6 center p-40 background-white b-r-6">
                        <form className="form-transparent-grey">
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
                                    <input type="text" defaultValue="" placeholder="Apartment, suite, unit etc./"
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
                                    <button className="btn" type="button">Register New Account </button>
                                    <button type="button" className="btn btn-danger m-l-10">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
export default Registration;
