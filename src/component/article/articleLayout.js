import React from 'react';
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";
import {useTranslation} from "react-i18next";

const ArticleLayout = () => {

    const {t} = useTranslation();

    return (
        <>
            <HeaderUpper/>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-lg-8 font2 pl-0 maqolaChiqarish">
                        <h3 className="mb-3">{t("tartib.tartib")}</h3>
                        <p className="mb-0 text-success">{t("tartib.tartib1")}</p>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">01</h1>
                            <div className="">
                                <p className="mb-0 layout">{t("tartib.tartib2")}</p>
                                <p className="mb-0 layout ml-3">{" *  "}{t("tartib.tartib3")}</p>
                                <p className="mb-0 layout ml-3">{" *  "}{t("tartib.tartib4")}</p>
                                <p className="mb-0 layout ml-3">{" *  "}{t("tartib.tartib11")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">02</h1>
                            <p className="layout">{t("tartib.tartib5")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">03</h1>
                            <p className="mb-4 layout">{t("tartib.tartib6")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">04</h1>
                            <p className="layout">{t("tartib.tartib7")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">05</h1>
                            <p className="mb-4 layout">{t("tartib.tartib8")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <h1 className="text-grey mr-4">06</h1>
                            <p className="layout">{t("tartib.tartib9")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterInfo/>
        </>
    );
};

export default ArticleLayout;