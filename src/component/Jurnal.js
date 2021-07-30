import React from 'react';
import HeaderUpper from "./HeaderUpper";
import FooterInfo from "./FooterInfo";
import {useTranslation} from "react-i18next";

const Jurnal = () => {

    const {t} = useTranslation();

    return (
        <div>
            <HeaderUpper/>
            <div className="container my-5">
                <h2 className="text-center">{t("jurnale.text")}</h2>
                <h5 className="mb-0 ml-5">
                    {t("malumot.malumot1")}
                </h5>
                <h5>
                    {t("malumot.malumot")}
                </h5>
            </div>
            <FooterInfo/>
        </div>
    );
};

export default Jurnal;