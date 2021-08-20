import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function FooterInfo() {
    const {t} = useTranslation();
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 pl-0">
                            <div className="">
                                <div className="widget-title2">{t('Shop.navbar')}</div>
                                <ul className="list">
                                    <li>
                                        <Link to="/letsenziya">{t('Shop.litsenziya')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/leadership">{t('Shop.leadership')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 pl-0">
                            <div className="">
                                <div className="widget-title2">{t('Our staff.staff')}</div>
                                <ul className="list">
                                    <li>
                                        <Link to="/staff/editor">{t('Our staff.Editor')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/staff/members">{t('Our staff.lives')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 pl-0">
                            <div className="">
                                <div
                                    className="widget-title2">{t('submitting an article to the journal.submiting')}</div>
                                <ul className="list">
                                    <li>
                                        <Link to="/">{t('submitting an article to the journal.article')}</Link>
                                    </li>
                                    <li>
                                        <Link to="">{t('submitting an article to the journal.mode')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 pl-0">
                            <div className="">
                                <div
                                    className="widget-title2">{t('submitting an article to the journal.submiting2')}</div>
                                <ul className="list">
                                    <li>
                                        <Link to="/">
                                          <img src="/imagesNew/Vector (11).png"/>
                                          <span>+998 71 239 41 42</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                          <img src="/imagesNew/mail.png"/>
                                          <span>journal@nhrc.uz</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright-content">
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <div className="moreInfo__logo">
                            <a href="!#">
                                <img
                                    alt="#"
                                    className="moreInfo__logo-img"
                                    src="/imagesNew/imagelogo.png"
                                ></img>
                            </a>
                            <p className="moreInfo__logo-lorem">
                                <a href="!#">
                                    {/*<br></br>*/}
                                    <span>{t("Offical Site.of the National Center")}</span>
                                    <br></br> <span>{t("Offical Site.for Human Rights")}</span>
                                    <br></br>
                                    <span>{t("Offical Site.of the Republic of Uzbekistan")}</span>
                                    {/*<span className="moreInfo__logo-dawnText">{t('Offical Site.navbar')}</span>*/}
                                </a>
                            </p>
                        </div>


                        <div className="text-right">

                            <div className="">
                      <img src="/imagesNew/designed by napa.png"/>
                            </div>

                            <div className="copyright-text">
                                &copy;
                                <a href="http://localhost:3000/" rel="noopener">
                                    {" "}
                                    {t("Offical Site.of the National Center")}{" "}
                                    {t("Offical Site.for Human Rights")}{" "}
                                    {t("Offical Site.of the Republic of Uzbekistan")}{" "}
                                    {t("Offical Site.navbar")}{" "}
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterInfo;
