import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SlickSlider from "react-slick";
function Slider() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="MainHeader">
        <div className="MainSlider slide kenburns">
          <SlickSlider {...settings}>
            <div className="MainSlider__bg">
              <h1 className="MainSlider__subtitle typing-demo">
                {t("Welcom.welcom to the")}
              </h1>
              <p className="MainSlider__lorem">
                {t("Welcom.The magazine has been 1999")}
              </p>
              <div>
                <Link to="/arcive" className="btn scroll-to">
                  {t("Welcom.Explore more")}
                </Link>
              </div>
            </div>
            <div className="MainSlider__bg">
              <h1 className="MainSlider__subtitle typing-demo">
                {t("Welcom.welcom to the")}
              </h1>
              <p className="MainSlider__lorem">
                {t("Welcom.The magazine has been 1999")}
              </p>
              <div>
                <Link to="/arcive" className="btn scroll-to">
                  {t("Welcom.Explore more")}
                </Link>
              </div>
            </div>
            <div className="MainSlider__bg">
              <h1 className="MainSlider__subtitle typing-demo">
                {t("Welcom.welcom to the")}
              </h1>
              <p className="MainSlider__lorem">
                {t("Welcom.The magazine has been 1999")}
              </p>
              <div>
                <Link to="/arcive" className="btn scroll-to">
                  {t("Welcom.Explore more")}
                </Link>
              </div>
            </div>
            
          </SlickSlider>
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
            <button type="button" className="btn btn-outline-danger btn-block">
              {t("send.send")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
