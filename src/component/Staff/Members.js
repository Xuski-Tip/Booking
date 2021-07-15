import React from "react";
import HeaderUpper from "../HeaderUpper";
import Slider from "react-slick";
export default function Members() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#888888", borderRadius: "50%"}}
            onClick={onClick}
        />
    );
  }

  function SampleNextArrow(props) {
    const {className, style, onClick} = props;

    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#888888", borderRadius: "50%"}}
            onClick={onClick}
        />
    );
  }

    return (
        <>
            <HeaderUpper/>
            <section className="aboutUs">
                <a href="!#">
                    <span className="aboutUs__subtitle strong ">Who we are</span>
                </a>
                <a href="!#">
                    <h1 className="aboutUs__lorem">About our company</h1>
                </a>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="heading-text heading-section">
                                <h4>THE COMPANY</h4>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-6">
                                    The most happiest time of the day!. Morbi sagittis, sem quis
                                    lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                                    sapien ut justo. Nulla varius consequat magna, id molestie
                                    ipsum volutpat quis. A true story, that never been told!.
                                    Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,{" "}
                                    <br></br> facilisis ut venenatis eu, sodales vel dolor. The
                                    most happiest time of the day!. Morbi sagittis, sem quis
                                    lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                                    sapien ut justo. Nulla varius consequat magna, id molestie
                                    ipsum volutpat quis. A true story, that never been told!.
                                    Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                                    facilisis ut venenatis eu, sodales vel dolor.{" "}
                                </div>
                                <div className="col-lg-6">
                                    Pellentesque ipsum erat, facilisis ut venenatis eu, sodales
                                    vel dolor. The most happiest time of the day!. Morbi sagittis,
                                    sem quis lacinia faucibus, orci ipsum gravida tortor, vel
                                    interdum mi sapien ut justo. Nulla varius consequat magna, id
                                    molestie ipsum volutpat quis. A true story, that never been
                                    told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum
                                    erat, facilisis ut venenatis eu, sodales vel dolor.
                                    Pellentesque ipsum erat, facilisis ut venenatis eu, sodales
                                    vel dolor. <br></br>The most happiest time of the day!. Morbi
                                    sagittis, sem quis lacinia faucibus, orci ipsum gravida
                                    tortor, vel interdum mi sapien ut justo. Nulla varius
                                    consequat magna, id molestie ipsum volut.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="background-grey MainClient">
                <div className="container">
                    <div className="heading-text heading-section text-center">
                        <h2>MEET OUR TEAM</h2>
                    </div>
                    <div className="Team__card">

                      <div className="container my-5">
                        <Slider {...settings}>
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Mirzatillo Tillaboyev</h3>
                              <span className="team__info-developer">
                    yuridik fanlar doktori, dotsent
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Xalim Boboyev</h3>
                              <span className="team__info-developer">
                    (yuridik fanlar doktori, professor, O'zbekiston Respublikasi fan arbobi)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Aslan Abashidze</h3>
                              <span className="team__info-developer">
                    (yuridik fanlar doktori, professor, O'zbekistonda xizmat ko'rsatgan yurist)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Akira Fujimoto</h3>
                              <span className="team__info-developer">
                    (Yaponiya)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Uilyam Batler</h3>
                              <span className="team__info-developer">
                    (AQSH)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Tadeush Bodio</h3>
                              <span className="team__info-developer">
                    (Polsha)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Marg'ub But</h3>
                              <span className="team__info-developer">
                    (Islom hamkorlik tashkiloti)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                          <div className="team__members p-2">
                            <div className="team__member">
                              <img
                                  alt="Error"
                                  src="/images/1Client.jpg"
                                  className="team__member-vesual"
                              ></img>
                            </div>
                            <div className="team__info">
                              <h3 className="team__info-subtitle mt-3">Reyn Mullerson</h3>
                              <span className="team__info-developer">
                    (Estoniya)
                    </span>
                              <p className="team__info-lorem"></p>
                              <div className="align-center">
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                >
                                  <i className="fab fa-facebook-f"></i>
                                  <span>Facebook</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
                                    data-width="100"
                                >
                                  <i className="fab fa-twitter"></i>
                                  <span>Twitter</span>
                                </a>
                                <a
                                    className="btn btn-xs btn-slide btn-light"
                                    href='#'
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
                </div>
            </section>
        </>
    );
}
