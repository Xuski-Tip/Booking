import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../simpleJs/loginApi";
import {getLanguage} from "../simpleJs/locale";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const RecentWorkSlide = () => {

    const {t} = useTranslation();
    const [jurnal12, setJurnal12] = useState([]);

    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                console.log("salom");
                console.log(res);
                setJurnal12(res.data.magazine.splice(0, 8));
            })
    }, []);

    function salom(){
        console.log("Salom")
    }

    return (
        <div className="portfolio">
            <div id="portfolio" className="portfolio-4-columns m-auto" data-margin="0">
                {jurnal12.map((item) => {
                    return (
                        <div className="" key={item.id}>
                                <div
                                    className="portfolio-item"
                                    key={item.id}
                                >
                                    <div className="portfolio-item-wrap">
                                        <div className="portfolio-image position-relative">
                                            <a target="_blank" href={
                                                "https://paycom-test.napaautomotive.uz/storage/" + item.file
                                            }>
                                                <img
                                                    className="portfolio-img"
                                                    src={"https://paycom-test.napaautomotive.uz/storage/" + item.image}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <h6 className="mt-2 marginleft">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril}</h6>
                                        <div className="portfolio-description">
                                            <a
                                                title="Paper Pouch!"
                                                data-lightbox="image"
                                                href={"https://paycom-test.napaautomotive.uz/storage/" + item.image}
                                            />
                                        </div>
                                        <div className="product-overlay">
                                            <button type="button" className="btn btn-primary btn-block" onClick={salom}>{t("leadershep.send")}</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    );
                })};
            </div>
            <Link to="/arcive">
                <h5 className="text-right mr-4 text-primary">{t("malumot.malumot2")} ...</h5>
            </Link>
        </div>
    );
};
export default RecentWorkSlide;