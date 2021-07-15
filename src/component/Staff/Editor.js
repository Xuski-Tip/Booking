import React from "react";
import Slider from "react-slick";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";
import {useTranslation} from "react-i18next";
//  const Editor = () => {
//
//
//   return (
//     <>
//       <HeaderUpper />
//       <section id="page-content">
//         <div class="container">
{/*<div class="heading-text heading-section text-center">*/
}
{/*  <h2>Magazine Editors</h2>*/
}
{/*  <span>*/
}
{/*    Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel*/
}
{/*    dolor. The most happiest time of the day!. Morbi sagittis, sem*/
}
{/*    quis lacinia faucibus.{" "}*/
}
{/*  </span>*/
}
{/*</div>*/
}
{/*<div className="Team__card">*/
}
//             {clientData.map(() => {
//               return (
{/*<div className="team__members" key={.id}>*/
}
{/*  <div className="team__member">*/
}
{/*    <img*/
}
{/*      alt="#"*/
}
{/*      src={.img}*/
}
{/*      className="team__member-vesual"*/
}
{/*    ></img>*/
}
{/*  </div>*/
}
{/*  <div className="team__info">*/
}
{/*    <h3 className="team__info-subtitle">{.subtitle}</h3>*/
}
{/*    <span className="team__info-developer">*/
}
{/*      {.title}*/
}
{/*    </span>*/
}
{/*    <p className="team__info-lorem">{.description}</p>*/
}
{/*    <div className="align-center">*/
}
{/*      <a*/
}
{/*        className="btn btn-xs btn-slide btn-light"*/
}
{/*        href={.facebook}*/
}
{/*      >*/
}
{/*        <i className="fab fa-facebook-f"></i>*/
}
{/*        <span>Facebook</span>*/
}
{/*      </a>*/
}
{/*      <a*/
}
{/*        className="btn btn-xs btn-slide btn-light"*/
}
{/*        href={.twitter}*/
}
{/*        data-width="100"*/
}
{/*      >*/
}
{/*        <i className="fab fa-twitter"></i>*/
}
{/*        <span>Twitter</span>*/
}
{/*      </a>*/
}
{/*      <a*/
}
{/*        className="btn btn-xs btn-slide btn-light"*/
}
{/*        href={.instagram}*/
}
{/*        data-width="118"*/
}
{/*      >*/
}
{/*        <i className="fab fa-instagram"></i>*/
}
{/*        <span>Instagram</span>*/
}
{/*      </a>*/
}
{/*      <a*/
}
{/*        className="btn btn-xs btn-slide btn-light"*/
}
{/*        href={.emal}*/
}
{/*        data-width="80"*/
}
{/*      >*/
}
{/*        <i className="icon-mail"></i>*/
}
{/*        <span>Mail</span>*/
}
{/*      </a>*/
}
{/*    </div>*/
}
{/*  </div>*/
}
{/*</div>*/
}
//               );
//             })}
//           </div>
//         </div>
//         <hr class="space" />
//
//
//       </section>
//       <FooterInfo/>
//     </>
//   );
// };

// export default Editor;


export default function Editor() {

    const {t} = useTranslation();
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

            <div className="heading-text heading-section text-center">
                <h2>{t("Our staff.Editor")}</h2>
            </div>


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
                            <h3 className="team__info-subtitle mt-3">Tanzila Narbayeva</h3>
                            <span className="team__info-developer">
                    (O'zbekiston)
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
                            <h3 className="team__info-subtitle mt-3">Qudratilla Rafiqov</h3>
                            <span className="team__info-developer">
                    (O'zbekiston)
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
                    (Rossiya Federatsiyasi)
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
                    <div className="team__members p-2">
                        <div className="team__member">
                            <img
                                alt="Error"
                                src="/images/1Client.jpg"
                                className="team__member-vesual"
                            ></img>
                        </div>
                        <div className="team__info">
                            <h3 className="team__info-subtitle mt-3">Tatyana Maskalkova</h3>
                            <span className="team__info-developer">
                    (Rossiya Federatsiyasi)
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
                            <h3 className="team__info-subtitle mt-3">Sergey Udarsev</h3>
                            <span className="team__info-developer">
                    (Qozog'iston)
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

            <FooterInfo/>
        </>
    );
}