import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import WOW from "wowjs";
function BackgroundGrey() {
  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  });
  const { t } = useTranslation();
  return (
    <section className="background-grey1">
      <div className="container">
        <div className="row">
          <div className="heading-text heading-section">
            <span className="indexs">{t("our work.WHAT WE DO")}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0s"
            >
              <img className="index-img bg-white" src="/imagesNew/Rectangle 3 (2).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (3).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.2s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (4).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.4s"
            >
              <img
                className="index-img"
                src="/imagesNew/Rectangle 3 (5).png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.6s"
            >
              <img
                className="index-img"
                src="/imagesNew/Rectangle 3 (6).png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.8s"
            >
              <img
                className="index-img"
                src="/imagesNew/Rectangle 3 (7).png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (8).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.2s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (9).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.4s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (10).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.6s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (11).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.8s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (12).png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="2s"
            >
              <img className="index-img" src="/imagesNew/Rectangle 3 (13).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BackgroundGrey;
