import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const SendMessage = () => {

    const {t} = useTranslation();

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
                                           label={t("send message.nameLabel")}
                                           placeholder={t("send message.namePlaceholder")}
                                           required
                                           errorMessage={t("send message.nameErrorMessage")}
                                       />
                                   </div>
                                   <div className="col-6">
                                       <AvField
                                           type="email"
                                           name="email"
                                           label={t("send message.emailLabel")}
                                           placeholder={t("send message.emailPlaceholder")}
                                           required
                                           errorMessage={t("send message.emailErrorMessage")}
                                       />
                                   </div>
                                   <div className="col-6">
                                       <AvField
                                           type="text"
                                           name="phone"
                                           label={t("send message.phoneLabel")}
                                           placeholder={t("send message.phonePlaceholder")}
                                           required
                                           errorMessage={t("send message.phoneErrorMessage")}

                                       />
                                   </div>
                                   <div className="col-12">
                                       <AvField
                                           type="textarea"
                                           name="message"
                                           rows="7"
                                           label={t("send message.messageLabel")}
                                           placeholder={t("send message.messagePlaceholder")}
                                           required
                                           errorMessage={t("send message.messageErrorMessage")}

                                       />
                                   </div>
                               </div>
                                <button className="btn" type="submit" id="form-submit">
                                    <i className="fa fa-paper-plane"></i>
                                    &nbsp;{t("send message.button")}
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