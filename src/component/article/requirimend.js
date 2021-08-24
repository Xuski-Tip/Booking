import React from "react";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";
import {useTranslation} from "react-i18next";

const Requirimend = () => {

    const {t} = useTranslation();

    return (
        <>
            <HeaderUpper/>
            <div className="container my-4 ">
                <div className="row">
                    <div className="col-12 col-lg-8 font">
                        <h3 className="mb-3">{t("talab.talab")}</h3>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(12).png" alt=""/>
                            <p className="mb-0">{t("talab.talab1")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/outsourcing 1.png" alt=""/>
                            <p className="mb-0">{t("talab.talab2")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(13).png" alt=""/>
                            <p className="mb-0">{t("talab.talab3")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(14).png" alt="Error"/>
                            <p className="mb-0">{t("talab.talab4")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/icon.png" alt="Error"/>
                            <p className="mb-0">{t("talab.talab5")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(15).png" alt=""/>
                            <p className="mb-0">{t("talab.talab6")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(16).png" alt=""/>
                            <p className="mb-0">{t("talab.talab7")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(17).png" alt=""/>
                            <p className="mb-0">{t("talab.talab8")}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img className="mr-3" src="/imagesNew/Vector%20(18).png" alt=""/>
                            <p className="mb-0">{t("talab.talab9")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center text-center my-3">

                <div className="text_button">
                    <a className="text_button-target d-flex" rel="noopener noreferrer" target="_blank"
                       href="/pdf/buklet1.pdf">
                        {t("talab.talab")}.pdf{" "} <img className="ml-3" src="/imagesNew/yukla.png" alt=""/>
                    </a>
                </div>
                {" "}
            </div>
            <FooterInfo/>
        </>
    );
};

export default Requirimend;
