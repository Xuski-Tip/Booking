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
    <section className="background-grey">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>{t("our work.WHAT WE DO")}</h2>
        </div>
        <div className="row">
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0s"
            >
              <img className="index-img bg-white" src="/images/doi.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0s"
            >
              <img className="index-img" src="/images/DoiCrossref.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.2s"
            >
              <img className="index-img" src="/images/elibrary.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.4s"
            >
              <img
                className="index-img"
                src="/images/Journal Impact Faktor Services.png"
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
                src="/images/Global Impact Faktor.png"
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
                src="/images/springer_link.jpg"
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
              <img className="index-img" src="/images/World Cate.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.2s"
            >
              <img className="index-img" src="/images/Research Gate.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.4s"
            >
              <img className="index-img" src="/images/CL_logo.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.6s"
            >
              <img className="index-img" src="/images/Academic Resource Index.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1.8s"
            >
              <img className="index-img" src="/images/Advanced Sciences Index.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-6 col-md-4 index__main-img">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="2s"
            >
              <img className="index-img" src="/images/Google Scholar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BackgroundGrey;
