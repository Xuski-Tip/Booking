import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import WOW from "wowjs";
function Services() {
   useEffect(() => {
    const wow = new WOW.WOW({live:false})
    wow.init();
  });
  const { t } = useTranslation();
  return (
    <section className="Services">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>{t("SERVICES.service")}</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse
            condimentum porttitor cursumus.
          </p>
        </div>
        <div className="row">
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="0s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-plug"></i>
                </a>
              </div>
              <h3>Powerful template</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="0.2s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-desktop"></i>
                </a>
              </div>
              <h3>Flexible Layouts</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="0.4s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-cloud"></i>
                </a>
              </div>
              <h3>Retina Ready</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="0.6s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="far fa-lightbulb"></i>
                </a>
              </div>
              <h3>Fast processing</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="0.8s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-trophy"></i>
                </a>
              </div>
              <h3>Unlimited Colors</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="1s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-thumbs-up"></i>
                </a>
              </div>
              <h3>Premium Sliders</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="1.2s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-rocket"></i>
                </a>
              </div>
              <h3>Modern Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="1.4s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-flask"></i>
                </a>
              </div>
              <h3>Clean Modern Code</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp col-lg-4"
            data-wow-delay="1.6s"
          >
            <div className="icon-box effect medium border small">
              <div className="icon">
                <a href="home">
                  <i className="fa fa-umbrella"></i>
                </a>
              </div>
              <h3>Free Updates & Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
                Suspendisse condimentum porttitor cursumus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
