import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../simpleJs/loginApi";
import {getLanguage} from "../simpleJs/locale";


const RecentWorkSlide = () => {

    const [jurnal12, setJurnal12] = useState([]);

    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                console.log("salom");
                console.log(res);
                setJurnal12(res.data.magazine.splice(0, 12));
            })
    }, []);

    return (
        <div className="portfolio">
            <div id="portfolio" className="portfolio-6-columns m-auto" data-margin="0">
                {jurnal12.map((item) => {
                    return (
                        <div key={item.id}>
                            <div
                                className="portfolio-item img-zoom h-100 ct-photography ct-marketing ct-media"
                                key={item.id}
                            >
                                <div className="portfolio-item-wrap">
                                    <div className="portfolio-image">
                                        <a href="!#">
                                            <img
                                                className="portfolio-img"
                                                src={"https://paycom-test.napaautomotive.uz/storage/" + item.image}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <h6 className="mt-2 marginleft">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : item.title_en}</h6>

                                    <div className="portfolio-description">
                                        <a
                                            title="Paper Pouch!"
                                            data-lightbox="image"
                                            href={"https://paycom-test.napaautomotive.uz/storage/" + item.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })};
            </div>
        </div>
       );
};
export default RecentWorkSlide;