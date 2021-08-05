import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

function FooterInfo() {
  const { t } = useTranslation();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="moreInfo__logo-footer">
              <a href="http://localhost:3000/">
                <img
                  alt="#"
                  className="moreInfo__logo-img"
                  src="/images/Logomain.jpg"
                ></img>
              </a>
              <p className="moreInfo__logo-lorem pt-3">
                <a href="http://localhost:3000/">
                  {/*<span className="moreInfo__logo-dawnText">*/}
                  {/*  {t("Offical Site.navbar")}*/}
                  {/*</span>*/}
                  {/*<br></br>*/}
                  <span className="pt-2">{t("Offical Site.of the National Center")}</span>
                  <br/> <span>{t("Offical Site.for Human Rights")}</span>
                  <br/>
                  <span>{t("Offical Site.of the Republic of Uzbekistan")}</span>
                </a>
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">{t('Shop.navbar')}</div>
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
                <div className="col-lg-4">
                  <div className="widget">
                    <div className="widget-title">{t('Our staff.staff')}</div>
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
                <div className="col-lg-5">
                  <div className="widget">
                    <div className="widget-title">{t('submitting an article to the journal.submiting')}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">
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
    </footer>
  );
}
export default FooterInfo;
