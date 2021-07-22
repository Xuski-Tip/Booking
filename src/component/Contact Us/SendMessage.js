import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {toast} from "react-toastify";

const SendMessage = () => {


    const OnSubmit = (event, errors, values) => {

        axios.post("https://paycom-test.napaautomotive.uz/api/contact/store", values)
            .then( (res) => {

                console.log(res)
                toast.success(res.data.status)
                console.log(event)
                console.log(errors)
                // values.email = ""
                // values.phone = ""


            })
            .catch( (error) => {
                toast.error("Error")
            })


    }



    return (
        <>
            <div className="row mt-5 application">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={OnSubmit}>
                               <div className="row">
                                   <div className="col-6">
                                       <AvField
                                           type="text"
                                           name="name"
                                           label="Name"
                                           placeholder="Enter your Name"
                                           required
                                           errorMessage="Name kiriting!"

                                       />
                                   </div>
                                   <div className="col-6">
                                       <AvField
                                           type="email"
                                           name="email"
                                           label="Email"
                                           placeholder="Enter your Email"
                                           required
                                           errorMessage="Email kiriting!"

                                       />
                                   </div>
                                   <div className="col-6">
                                       <AvField
                                           type="text"
                                           name="phone"
                                           label="Phone Number"
                                           placeholder="Enter your Phone Number"
                                           required
                                           errorMessage="Phone Number kiriting!"

                                       />
                                   </div>
                                   <div className="col-12">
                                       <AvField
                                           type="textarea"
                                           name="message"
                                           rows="7"
                                           label="Message"
                                           placeholder="Enter your Message"
                                           required
                                           errorMessage="Message kiriting!"

                                       />
                                   </div>
                               </div>
                                <button className="btn" type="submit" id="form-submit">
                                    <i className="fa fa-paper-plane"></i>
                                    &nbsp;Send message
                                </button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendMessage;