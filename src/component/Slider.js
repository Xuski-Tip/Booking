import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Slider() {
  const { t } = useTranslation();
  return (
    <>
      <div className="MainHeader">
        <div className="MainSlider slide kenburns">
          <div className="MainSlider__bg slide-captions text-center text-light">
            <img
              alt="#"
              src="/images/MainBackground.jpg"
              className="MainSlider__bg-img"
            ></img>
            <div className="MainSlider__bg-black"></div>
            <h1 className="MainSlider__subtitle">
              {t("Welcom.welcom to the")}
            </h1>
            <p className="MainSlider__lorem">
              {t("Welcom.The magazine has been 1999")}
            </p>
            <div>
              <Link to="/Shop" className="btn scroll-to">
                {t("Welcom.Explore more")}
              </Link>
            </div>
          </div>
        </div>
        <div className="MainBg__right">
          <h6 className="text-primary pb-2 text-center">Jurnalning yangi soni</h6>
          <Link to="/Shop">
            <img
              alt="error"
              className="MainBg__right-img"
              src="/images/azolar/jurnal2.jpg"
            ></img>
          </Link>
          <div className="p-3">
            <button type="button" className="btn btn-outline-danger btn-block">Sotib olish</button>
          </div>

        </div>
      </div>
    </>
  );
}
export default Slider;
