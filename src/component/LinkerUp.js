import React from "react";
class LinkerUp extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          {/*<div className="moreInfo__logo-footer">*/}
          {/*  <a href="http://localhost:3000/">*/}
          {/*    <img*/}
          {/*        alt="#"*/}
          {/*        className="moreInfo__logo-img"*/}
          {/*        src="/images/Logomain.jpg"*/}
          {/*    ></img>*/}
          {/*  </a>*/}
          {/*  <p className="moreInfo__logo-lorem pt-3">*/}
          {/*    <a href="http://localhost:3000/">*/}
          {/*      /!*<span className="moreInfo__logo-dawnText">*!/*/}
          {/*      /!*  {t("Offical Site.navbar")}*!/*/}
          {/*      /!*</span>*!/*/}
          {/*      /!*<br></br>*!/*/}
          {/*      <span className="pt-2">{t("Offical Site.of the National Center")}</span>*/}
          {/*      <br/> <span>{t("Offical Site.for Human Rights")}</span>*/}
          {/*      <br/>*/}
          {/*      <span>{t("Offical Site.of the Republic of Uzbekistan")}</span>*/}
          {/*    </a>*/}
          {/*  </p>*/}
          {/*</div>*/}
          <a href='http://localhost:3000/' id="scrollTop">
            <i className="icon-chevron-up"></i>
            <i className="icon-chevron-up"></i>
          </a>

        </div>
      </div>
    </div>
     );
  }
}
export default LinkerUp;