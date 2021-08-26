import React from "react";
import HeaderUpper from "../HeaderUpper";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { login } from "../../redux/Action/registerAction";
import { connect } from "react-redux";
import {useTranslation} from "react-i18next";
import FooterInfo from "../FooterInfo";

const Registration = (props) => {

  const {t} = useTranslation();

  const prevMain = () => {
    props.history.push("/")
  };

  return (
    <>
      <HeaderUpper />
      <section className="pt-0 pb-0">
        <div className="d-flex">

          <div className="registrationLeft d-none d-md-block">
            <img className="w-100" src="/imagesNew/royxat.png"/>
          </div>

          <div className="registrationRight">
            <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                  <AvForm
                      onSubmit={(event, error, value) =>
                          props.login(event, error, value, props.history)
                      }
                      className="form-transparent-grey"
                  >
                    <h3>{t("registr.accaunt")}</h3>
                    <p>
                      {t("registr.list")}
                    </p>

                    <AvField
                        // label={t("registr.name")}
                        type="text"
                        placeholder={t("registr.name")}
                        className="form-control"
                        name="name"
                        required
                        errorMessage={t("registr.errorName")}
                    />

                    <AvField
                        // label={t("registr.email")}
                        type="email"
                        placeholder={t("registr.email")}
                        name="email"
                        className="form-control"
                        required
                        errorMessage={t("registr.errorEamil")}
                    />

                    <AvField
                        // label={t("registr.password")}
                        type="password"
                        placeholder={t("registr.password")}
                        className="form-control"
                        name="password"
                        required
                        errorMessage={t("registr.errorParol")}
                    />



                   <div className="d-flex justify-content-end align-items-center">
                     <a type="" className="canselButton" onClick={prevMain}>
                       {t("registr.cansel")}
                     </a>
                     <button className="registrButton" type="submit">
                       {t("registr.registr")}{" "}
                     </button>
                   </div>
                  </AvForm>
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
export default connect(null, { login })(Registration);