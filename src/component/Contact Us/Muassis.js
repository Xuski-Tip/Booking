import React from 'react';
import {useTranslation} from "react-i18next";
const Muassis = () => {

    const {t} = useTranslation();

    return (
       <div className="container">
           <div className="row mb-5">
               <div className="col-lg-4 mb-5">
                   <div className="heading-text2 heading-section text-center">
                       <h2 className="mt-3">{t("connect.muassis")}</h2>
                   </div>
                   <div className="moreInfo__logo2 mt-3">
                       <a target="_blank" href="http://insonhuquqlari.uz">
                           <img
                               alt="#"
                               className="moreInfo__logo-img4"
                               src="/imagesNew/image 9.png"
                           ></img>
                       </a>
                       <p className="moreInfo__logo-lorem">
                           <a target="_blank" href="http://insonhuquqlari.uz">
                               {/*<br></br>*/}
                               <span>{t("Offical Site.of the National Center")}</span>
                               <br></br> <span>{t("Offical Site.for Human Rights")}</span>
                               <br></br>
                               <span>{t("Offical Site.of the Republic of Uzbekistan")}</span>
                               {/*<span className="moreInfo__logo-dawnText">{t('Offical Site.navbar')}</span>*/}
                           </a>
                       </p>
                   </div>
               </div>

               <div className="col-lg-8 mb-5 w-100 text-center">
                   <div className="heading-text2 heading-section text-center">
                       <h2 className="mt-3">{t("connect.muassis2")}</h2>
                   </div>
                  <div className="d-lg-flex justify-content-center align-items-center mt-3">

                      <div className="moreInfo__logo2 mr-5">
                          <a href="https://www.kasaba.uz">
                              <img
                                  alt="#"
                                  className="moreInfo__logo-img2"
                                  src="/imagesNew/image 9 (1).png"
                              ></img>
                          </a>
                          <p className="moreInfo__logo-lorem">
                              <a href="https://www.kasaba.uz">
                          {t("connect.m1")}
                                  <br/> {t("connect.m2")}
                                  <br/> {t("connect.m3")}
                              </a>
                          </p>

                      </div>

                      <div className="moreInfo__logo2 ml-5">
                          <a href="http://www.ombudsman.uz">
                              <img
                                  alt="#"
                                  className="moreInfo__logo-img3"
                                  src="/imagesNew/image 9 (2).png"
                              ></img>
                          </a>
                          <p className="moreInfo__logo-lorem">
                              <a href="http://www.ombudsman.uz">
                                  {t("connect.o1")} <br/>
                                  {t("connect.o2")}<br/>
                                  {t("connect.o3")}
                              </a>
                          </p>

                      </div>
                  </div>
               </div>

           </div>
       </div>
    );
};

export default Muassis;