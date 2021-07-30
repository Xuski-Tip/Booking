import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Slider() {
  const { t } = useTranslation();
  return (
    <>
      <div className="MainHeader">
        <div className="MainSlider slide kenburns">
          <div className="MainSlider__bg wrapper slide-captions text-center text-light">
            <img
              alt="#"
              src="/images/background/main.jpg"
              className="MainSlider__bg-img"
            />
            <div className="MainSlider__bg-black"></div>
            {/*<div className="wrapper">*/}
              <h1 className="MainSlider__subtitle typing-demo">
                {t("Welcom.welcom to the")}
              </h1>
            {/*</div>*/}
            <p className="MainSlider__lorem">
              {t("Welcom.The magazine has been 1999")}
            </p>
            <div>
              <Link to="/jurnal" className="btn scroll-to">
                {t("Welcom.Explore more")}
              </Link>
            </div>
          </div>
        </div>
        <div className="MainBg__right">
          <h4 className="text-primary pb-2 text-center">{t("send.new")}</h4>
          <Link to="/Shop">
            <img
              alt="error"
              className="MainBg__right-img"
              src="/images/azolar/jurnal2.jpg"
            />
          </Link>
          <div className="link-button-main">
            <button type="button" className="btn btn-outline-danger btn-block">{t("send.send")}</button>
          </div>

        </div>
      </div>
    </>
  );
}
export default Slider;
