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
                    DEMOKRATLASHTIRISH VA INSON HUQUQLARI JURNALI-
                    ilmiy-maʼrifiy jurnal
                    Jurnal 2020-yil 16-martda
                </h5>
                <h5>
                    Oʻzbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi
                    Axborot va ommaviy kommunikatsiyalar agentligida 0202 raqami bilan roʻyxatdan oʻtgan.
                    “Demokratlashtirish va inson huquqlari” jurnali
                    Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Oliy attestatsiya komissiyasining
                    huquqshunoslik, falsafa, tarix, siyosiy, islomshunoslik va sotsiologiya fanlari boʻyicha
                    dissertatsiya asosiy ilmiy natijalarini chop etish tavsiya etilgan
                    ilmiy nashrlar roʻyxatiga kiritilgan
                </h5>
            </div>
            <FooterInfo/>
        </div>
    );
};

export default Jurnal;