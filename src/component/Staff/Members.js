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
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <section className="background-grey MainClient">
        <div className="container">
          <div className="heading-text heading-section text-center">
            <h2>{t("Our staff.lives")}</h2>
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
                    Mirzatillo Tillaboyev
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member1")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                  <h3 className="team__info-subtitle mt-3">Xalim Boboyev</h3>
                  <span className="team__info-developer">
                    {t("members.member2")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                  <h3 className="team__info-subtitle mt-3">Omon Oqyulov</h3>
                  <span className="team__info-developer">
                    {t("members.member3")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                  <h3 className="team__info-subtitle mt-3">Asqar G'afurov</h3>
                  <span className="team__info-developer">
                    {t("members.member1")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                    Muzaffar Mamasiddqov
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member4")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                    src="/images/1Client.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">Mixail Gasanov</h3>
                  <span className="team__info-developer">
                    {t("members.member5")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                    src="/images/1Client.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    Yelizavet Kutibayeva
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member4")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
                    src="/images/1Client.jpg"
                    className="team__member-vesual"
                  ></img>
                </div>
                <div className="team__info">
                  <h3 className="team__info-subtitle mt-3">
                    Xaydarali Muxamedov
                  </h3>
                  <span className="team__info-developer">
                    {t("members.member4")}
                  </span>
                  <p className="team__info-lorem"></p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="100"
                    >
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
                      data-width="118"
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a
                      className="btn btn-xs btn-slide btn-light"
                      href="#"
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
