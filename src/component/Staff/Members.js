import React from "react";
import HeaderUpper from "../HeaderUpper";
import Slider from "react-slick";
import FooterInfo from "../FooterInfo";
import { useTranslation } from "react-i18next";

export default function Members() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#888888",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#888888",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <HeaderUpper />
      <section className="MainClient pt-0 mt-4">
        <div className="container">
          <div className="row">
            <h2 className="membertext mb-5">{t("Our staff.lives")}</h2>
          </div>
          <div className="Team__cards">
            <Slider {...settings}>
              <div className="team__members team__anathermembers ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/1Client.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    {t("azolar.azo1")}
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member1")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members  h-100">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/boboyev.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">{t("azolar.azo2")}</h3>
                  <span className="team__info-developer">
                    {t("members.member2")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/oyqulov.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">{t("azolar.azo3")}</h3>
                  <span className="team__info-developer">
                    {t("members.member3")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/gafurov.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">{t("azolar.azo4")}</h3>
                  <span className="team__info-developer">
                    {t("members.member6")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/mamasiddiqov.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    {t("azolar.azo7")}
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member5")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/MixailGasanov.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">{t("azolar.azo8")}</h3>
                  <span className="team__info-developer">
                    {t("members.member6")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/kutibayeva.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    {t("azolar.azo5")}
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member5")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__members ">
                <div className="team__member ">
                  <img
                    alt="Error"
                    src="/images/azolar/muxamedov.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    {t("azolar.azo7")}
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member7")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="!#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="!#"
                      data-width="80"
                    >
                      <i className="icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <FooterInfo />
    </>
  );
}
