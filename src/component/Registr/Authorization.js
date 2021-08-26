import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import HeaderUpper from "../HeaderUpper";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {avtorizatsiya} from "../../redux/Action/loginAction";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {API, LOGIN, TOKEN_LOCAL} from "../../simpleJs/loginApi";
import {toast} from "react-toastify";
import FooterInfo from "../FooterInfo";

const Authorization = (props) => {

    const [logout, setLogout] = useState("");

    function logOut() {
        axios.get(API + "me/logout")
            .then((res) => {
                setLogout(res.data.status);
                toast.success("Log out");
                props.history.push("/");
                localStorage.setItem(TOKEN_LOCAL, "");
                localStorage.setItem(LOGIN, "")
            })
    }

    const {t} = useTranslation();
    return (
      <>
        <HeaderUpper/>
        <section className="fullscreen">
         <div className="d-flex w-100 ">
             <div className="registrationLeft w-100 d-none d-md-block">
                 <img className="w-100" src="/imagesNew/royxat.png"/>
             </div>
             <div className="authorizationRight w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h3>{t("login.loginAccount")}</h3>
                            <AvForm onSubmit={ (event, errors, values) => props.avtorizatsiya(event, errors, values, props.history)}>
                                {/*<div className="form-group">*/}
                                {/*<label className="sr-only">Username or Email</label>*/}
                                <AvField
                                    type="email"
                                    name="email"
                                    label={t("login.emailLabel")}
                                    className="form-control"
                                    // autoComplete="off"
                                    placeholder={t("login.emailPlaceholder")}
                                    required
                                    errorMessage = {t("login.emailError")}
                                />
                                {/*</div>*/}
                                {/*<div className="form-group m-b-5">*/}
                                {/*<label className="sr-only">Password</label>*/}
                                <AvField
                                    type="password"
                                    name="password"
                                    label={t("login.passwordLabel")}
                                    className="form-control"
                                    // autoComplete="off"
                                    placeholder={t("login.passwordPlaceholder")}
                                    required
                                    errorMessage = {t("login.passwordError")}
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
                                <div className="d-flex justify-content-end align-items-center">


                                    <button type="submit" className="registrButton">
                                        {t("login.submitButton")}
                                    </button>
                                </div>
                                {/*</div>*/}
                            </AvForm>
                            <p className="small mt-2">
                                {t("login.caution")}{" "}
                                <Link to="Authorization/Registration">
                                    {t("login.caution2")}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </section>
        <FooterInfo/>
      </>
    );

};
export default connect(null, {avtorizatsiya})(Authorization) ;
