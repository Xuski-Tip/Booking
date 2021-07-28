import React from "react";
import HeaderUpper from "../HeaderUpper";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { login } from "../../redux/Action/registerAction";
import { connect } from "react-redux";
import {useTranslation} from "react-i18next";

const Registration = (props) => {

  const {t} = useTranslation();

  const prevMain = () => {
    props.history.push("/")
  };

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
                <AvForm
                  onSubmit={(event, error, value) =>
                    props.login(event, error, value, props.history)
                  }
                  className="form-transparent-grey"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>{t("registr.accaunt")}</h3>
                      <p>
                        {t("registr.list")}
                      </p>
                    </div>
                    <div className="col-lg-6 form-group">
                      <AvField
                        label={t("registr.name")}
                        type="text"
                        placeholder={t("registr.name")}
                        className="form-control"
                        name="name"
                        required
                        errorMessage={t("registr.errorName")}
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <AvField
                        label={t("registr.password")}
                        type="password"
                        placeholder={t("registr.password")}
                        className="form-control"
                        name="password"
                        required
                        errorMessage={t("registr.errorParol")}
                      />
                    </div>
                    <div className="col-lg-12 form-group">
                      <AvField
                        label={t("registr.email")}
                        type="email"
                        placeholder={t("registr.email")}
                        name="email"
                        className="form-control"
                        required
                        errorMessage={t("registr.errorEmail")}
                      />
                    </div>

                    <div className="col-lg-12 d-md-flex justify-content-between form-group">
                      <button className="btn" type="submit">
                        {t("registr.registr")}{" "}
                      </button>
                      <button type="button" className="btn btn-danger m-l-10" onClick={prevMain}>
                        {t("registr.cansel")}
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
};
export default connect(null, { login })(Registration);
