import React, {useState} from 'react';
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";
import {Collapse} from "reactstrap";
import {useTranslation} from "react-i18next";

const Leadership = () => {

    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const openModal = () => {
        setOpen(!open);
    };
    const openModal2 = () => {
        setOpen2(!open2);
    };


    return (
        <>
            <HeaderUpper/>

            <div className="container">
                <div className="row">
                    <h3 className="w-100 mt-5 text-center">
                        {t("leadershep.leader")}
                    </h3>
                    <div className="col-12 mt-4 d-flex">
                        <img className="object" src="/images/azolar/rahbar.jpg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                {t("leadershep.rais")}
                            </h5>
                            <h3>{t("leadershep.name1")}</h3>

                            <button type="button" className="btn btn-primary" onClick={openModal}>{t("leadershep.tarjima")}</button>
                            <Collapse isOpen={open}>
                                {t("leadershep.leadershep")}
                                <p style={{cursor:"pointer"}} className="text-primary" onClick={openModal}>{t("leadershep.back")}</p>
                            </Collapse>

                        </div>
                    </div>
                    <div className="col-12 mt-4 d-flex ">
                        <img className="object" src="/images/ErkinErnazarov.jpeg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                {t("leadershep.muharrir")}
                            </h5>
                            <h3>
                                {t("leadershep.name")}
                            </h3>
                            <button type="button" className="btn btn-primary" onClick={openModal2}>{t("leadershep.tarjima")}</button>
                            <Collapse isOpen={open2}>
                                hello
                            </Collapse>

                        </div>
                    </div>
                </div>
            </div>

            <FooterInfo/>
        </>
    );
};

export default Leadership;