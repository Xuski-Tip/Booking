import React from 'react';
import {useTranslation} from "react-i18next";

const Generalinformation = () => {
    const {t} = useTranslation();
    return (
        <div className='background-grey2'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="information">
                            {t("aboutjournal.text0")}
                        </h2>
                        <h4 className="informationText">
                            {t("aboutjournal.text1")}
                            <br/>
                            <br/>
                            {t("aboutjournal.text2")}
                        </h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="inforImg" src="/imagesNew/bg (3).png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generalinformation;