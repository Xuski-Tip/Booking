import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SlickSlider from "react-slick";
import axios from "axios";
import {API} from "../simpleJs/loginApi";
function Slider() {

    const [jurnal12, setJurnal12] = useState([]);

    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                console.log("hello");
                setJurnal12(res.data.magazine.splice(0, 1));
            })
    }, []);
    console.log(jurnal12);
    console.log(jurnal12.price);

    const { t } = useTranslation();
    const settings = {
        dots: true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="MainHeader">
                <div className="MainSlider slide kenburns">
                    <SlickSlider {...settings}>
                        <div className="backImg">
                            <div className="MainSlider__bg">
                                <h1 className="MainSlider__subtitle typing-demo">
                                {t("Welcom.welcom to the")}
                            </h1>
                                {/*<p className="MainSlider__lorem">*/}
                                {/*    {t("Welcom.The magazine has been 1999")}*/}
                                {/*</p>*/}
                                <div>
                                    <Link to="/jurnal" className="btn scroll-to">
                                        {t("Welcom.Explore more")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="MainSlider__bg1">
                            <h1 className="MainSlider__subtitle typing-demo">
                                {t("Welcom.welcom to the")}
                            </h1>
                            {/*<p className="MainSlider__lorem">*/}
                            {/*    {t("Welcom.The magazine has been 1999")}*/}
                            {/*</p>*/}
                            <div>
                                <Link to="/jurnal" className="btn scroll-to">
                                    {t("Welcom.Explore more")}
                                </Link>
                            </div>
                        </div>
                        <div className="MainSlider__bg2">
                            <h1 className="MainSlider__subtitle typing-demo">
                                {t("Welcom.welcom to the")}
                            </h1>
                            {/*<p className="MainSlider__lorem">*/}
                            {/*    {t("Welcom.The magazine has been 1999")}*/}
                            {/*</p>*/}
                            <div>
                                <Link to="/jurnal" className="btn scroll-to">
                                    {t("Welcom.Explore more")}
                                </Link>
                            </div>
                        </div>
                        <div className="MainSlider__bg3">
                            <h1 className="MainSlider__subtitle typing-demo">
                                {t("Welcom.welcom to the")}
                            </h1>
                                {/*<p className="MainSlider__lorem">*/}
                                {/*    {t("Welcom.The magazine has been 1999")}*/}
                                {/*</p>*/}
                            <div>
                                <Link to="/jurnal" className="btn scroll-to">
                                    {t("Welcom.Explore more")}
                                </Link>
                            </div>
                        </div>
                    </SlickSlider>
                </div>

                <div className="MainBg__right">
                    <div className="link">
                        <Link to="/arcive">
                            {jurnal12.map((item, index) => {
                                return(
                                    <img
                                        alt="error"
                                        className="MainBg__right-img"
                                        src={"https://paycom-test.napaautomotive.uz/storage/" + item.image}
                                    />
                                )
                            })}
                        </Link>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3 ml-0">
                        <h4 className="newNumber">{t("send.new")}</h4>
                    <div className="link-button-main">
                        <button type="button" className="btn btn-outline-danger ">
                            {t("send.send")}
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Slider;