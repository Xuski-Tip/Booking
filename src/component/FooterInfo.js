import React from "react";
import { useTranslation } from "react-i18next";
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
              <p className="moreInfo__logo-lorem">
                <a href="http://localhost:3000/">
                  <span className="moreInfo__logo-dawnText">
                    {t("Offical Site.navbar")}
                  </span>
                  <br></br>
                  <span>{t("Offical Site.of the National Center")}</span>
                  <br></br> <span>{t("Offical Site.for Human Rights")}</span>
                  <br></br>
                  <span>{t("Offical Site.of the Republic of Uzbekistan")}</span>
                </a>
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Discover</div>
                    <ul className="list">
                      <li>
                        <a href="http://localhost:3000/">Features</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Layouts</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Corporate</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Updates</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Pricing</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Customers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Features</div>
                    <ul className="list">
                      <li>
                        <a href="http://localhost:3000/">Layouts</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Headers</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Widgets</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Footers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Pages</div>
                    <ul className="list">
                      <li>
                        <a href="http://localhost:3000/">Portfolio</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Blog</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Support</div>
                    <ul className="list">
                      <li>
                        <a href="http://localhost:3000/">Help Desk</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Documentation</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/">Contact Us</a>
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
              {t("Offical Site.navbar")}{" "}
              {t("Offical Site.of the National Center")}{" "}
              {t("Offical Site.for Human Rights")}
              {t("Offical Site.of the Republic of Uzbekistan")}
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterInfo;
