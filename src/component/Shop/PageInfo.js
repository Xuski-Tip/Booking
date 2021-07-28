import React from "react";
import {useTranslation} from "react-i18next";

export default function Client() {
    const {t} = useTranslation();
  return (
    <div className="container">
      <div className="PageInfo row m-b-20">
        <div className="col-lg-12 p-t-10 m-b-20">
          <h3 className="m-b-20 text-align-center">
              {t("jurnale.text")}
          </h3>
        </div>
      </div>
    </div>
  );
}
