import React from "react";
import Slider from "react-slick";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";
import { useTranslation } from "react-i18next";

export default function Editor() {
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

      <div className="heading-text heading-section text-center">
        <h2>{t("Our staff.Editor")}</h2>
      </div>

      <div className="container my-5">
        <Slider {...settings}>
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/TanzilaNarbayeva.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">{t("azolar2.azo1")}</h3>
              <span className="team__info-developer">
                ({t("state.state1")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/azolar/rafiqov.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">{t("azolar2.azo2")}</h3>
              <span className="team__info-developer">
                ({t("state.state1")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/AslanAbashidze.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Aslan Abashidze</h3>
              <span className="team__info-developer">
                ({t("state.state2")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                width="300px"
                alt="Error"
                src="/images/azolar/fujimoto.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Akira Fujimoto</h3>
              <span className="team__info-developer">
                ({t("state.state3")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/batler.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Uilyam Batler</h3>
              <span className="team__info-developer">
                ({t("state.state4")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/TadeushBodio.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Tadeush Bodio</h3>
              <span className="team__info-developer">
                ({t("state.state5")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/azolar/salim.png"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Marg'ub But</h3>
              <span className="team__info-developer">
                ({t("state.state6")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/azolar/myullerson.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Reyn Mullerson</h3>
              <span className="team__info-developer">
                ({t("state.state7")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/azolar/maskalkova.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Tatyana Moskalkova</h3>
              <span className="team__info-developer">
                ({t("state.state2")})
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
          <div className="team__members p-2">
            <div className="team__member">
              <img
                alt="Error"
                src="/images/azolar/udarwev.jpg"
                className="team__member-vesual"
              ></img>
            </div>
            <div className="team__info">
              <h3 className="team__info-subtitle mt-3">Sergey Udarsev</h3>
              <span className="team__info-developer">
                ({t("state.state8")})
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

      <FooterInfo />
    </>
  );
}
