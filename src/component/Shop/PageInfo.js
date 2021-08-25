import React from "react";
import {useTranslation} from "react-i18next";

export default function Client() {
    const {t} = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <div className="PageInfo row m-b-20">
                    <div className="col-lg-12 p-t-10 mt-3">
                        <h3 className="m-b-20 text-align-center arxivText">
                            {t("Arxiv.arxiv")}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
