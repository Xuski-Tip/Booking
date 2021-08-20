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
               <div className="row">
                   <div className="col-12 col-lg-6 col-md-9 mb-3">
                       <h2 className="text-center">{t("jurnale.text")}</h2>
                       <h5 className="mb-3">
                           {t("malumot.malumot1")}
                       </h5>
                       <h5>
                           {t("malumot.malumot")}
                       </h5>
                   </div>
                   <div className="col-12 col-lg-6 col-md-9 mb-3">
                       <img className="w-100" src="/imagesNew/bg.png" alt="Error"/>
                   </div>
               </div>
            </div>
            <FooterInfo/>
        </div>
    );
};

export default Jurnal;