import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import WOW from "wowjs";
function BackgroundGrey() {
  useEffect(() => {
    const wow = new WOW.WOW({live:false})
    wow.init();
  });
  const { t } = useTranslation();
  return (
    <section className="background-grey">
      <div className="container">
        <div className="heading-text heading-section">
          <h2>{t("our work.WHAT WE DO")}</h2>
          <span className="lead">
            Create amam ipsum dolor sit amet, Beautiful nature, and rare
            feathers!.
          </span>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0s"
            >
              <h4>Modern Design</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.2s"
            >
              <h4>Loaded with Features</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.4s"
            >
              <h4>Completely Customizable</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp "
              data-wow-delay="0.6s"
            >
              <h4>100% Responsive Layout</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.8s"
            >
              <h4>Clean Modern Code</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="wow animate__animated animate__fadeInUp"
              data-animate="fadeInUp"
              data-wow-delay="1s"
            >
              <h4>Free Updates & Support</h4>
              <p>
                Lorem ipsum dolor sit amet, blandit vel sapien vitae,
                condimentum ultricies magna et. Quisque euismod orci ut et
                lobortis aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BackgroundGrey;
