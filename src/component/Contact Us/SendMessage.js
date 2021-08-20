import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const SendMessage = () => {

    const {t} = useTranslation();

    const OnSubmit = (event, errors, values) => {

        axios.post("https://backend-magazine.napaautomotive.uz/api/contact/store", values)
            .then((res) => {

                console.log(res);
                toast.success(res.data.status);
                console.log(event);
                console.log(errors)
                // values.email = ""
                // values.phone = ""


            })
            .catch((error) => {
                toast.error("Error")
            })


    }


    return (
        // <div className="container">
        <div className="application">
            {/*<div className="col-md-10 offset-md-1 col-12">*/}
            {/*   */}
            {/*</div>*/}

            <div className="card">
                <div className="card-body pl-0 pt-0">
                    <AvForm onSubmit={OnSubmit}>
                        {/*<div className="row">*/}
                        {/*<div className="col-12 col-md-8 col-lg-6">*/}
                        <AvField
                            type="text"
                            name="name"
                            label={t("send file.nameLabel")}
                            placeholder={t("send file.namePlaceholder")}
                            required
                            errorMessage={t("send file.nameErrorMessage")}
                        />
                        {/*</div>*/}
                        {/*<div className="col-12 col-md-8 col-lg-6">*/}
                        <AvField
                            type="email"
                            name="email"
                            label={t("send file.emailLabel")}
                            placeholder={t("send file.emailPlaceholder")}
                            required
                            errorMessage={t("send file.emailErrorMessage")}
                        />
                        {/*</div>*/}
                        {/*<div className="col-12 col-md-8 col-lg-6">*/}
                        <AvField
                            type="text"
                            name="phone"
                            label={t("send file.phoneLabel")}
                            placeholder={t("send file.phonePlaceholder")}
                            required
                            errorMessage={t("send file.phoneErrorMessage")}

                        />
                        {/*</div>*/}
                        {/*<div className="col-12">*/}
                        <AvField
                            type="textarea"
                            name="message"
                            rows="7"
                            label={t("send message.messageLabel")}
                            placeholder={t("send message.messagePlaceholder")}
                            required
                            errorMessage={t("send message.messageErrorMessage")}

                        />
                        {/*</div>*/}
                        {/*</div>*/}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src="/imagesNew/clock.png" className="clockImg"/>
                                <span className="time ml-2">Ish vaqti Dushanba-Juma: 9:00 - 18:00</span>
                            </div>
                            <button className="sendMessageButton" type="submit" id="form-submit">
                                {/*<i className="fa fa-paper-plane"></i>*/}
                                &nbsp;{t("send message.button")}
                            </button>
                        </div>
                    </AvForm>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default SendMessage;