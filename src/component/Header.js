import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="moreInfo">
      <div className="moreInfo__logo">
        <a href="#">
          <img
            alt="#"
            className="moreInfo__logo-img"
            src="/images/Logomain.jpg"
          ></img>
        </a>
        <p className="moreInfo__logo-lorem">
          <a href="#">
            {/*<br></br>*/}
            <span>{t('Offical Site.of the National Center')}</span>
            <br></br> <span>{t('Offical Site.for Human Rights')}</span>
            <br></br><span>{t("Offical Site.of the Republic of Uzbekistan")}</span>
            {/*<span className="moreInfo__logo-dawnText">{t('Offical Site.navbar')}</span>*/}
          </a>
        </p>
      </div>
      <div className="TextDemocratic">
        {" "}
        {t("Offical Site.democration")} <br></br> {t("Offical Site.scientific and educational journal")}
      </div>
      <nav className="moreInfo__navigation">
        <ul className="moreInfo__navigation-mainList">
          <li className="moreInfo__navigation-list">
            <a href="tel:+998712391358">
              <img
                alt="#"
                src="/images/free-icon-phone-call-126509.png"
                className="moreInfo__navigation-img"
              ></img>
            </a>
            <div className="moreInfo__navigation-container">
              <span className="moreInfo__navigation-lorem--upp">
                <a href="#">{t("Offical Site.Contact Phone")}</a>
              </span>
              <span className="moreInfo__navigation-lorem--dawn">
                <a href="tel:+998712394142">+998 71 239 41 42</a>
              </span>
            </div>
          </li>
          <li className="moreInfo__navigation-list">
            <a href="#">
              <img
                alt="#"
                src="/images/free-icon-placeholder-1180805.png"
                className="moreInfo__navigation-img"
              ></img>
            </a>
            <div className="moreInfo__navigation-container">
              <span className="moreInfo__navigation-lorem--upp">
                <a href="#">{t("Offical Site.Our address")}</a>
              </span>
              <span className="moreInfo__navigation-lorem--dawn">
                <a href="#">journal@nhrc.uz</a>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
