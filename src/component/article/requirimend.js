import React from "react";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";

const Requirimend = () => {
  return (
    <>
      <HeaderUpper />
      <div className="bglight">
        <div className="container d-flex justify-content-center">
          <img
            src="/images/background/maqolatalabi.jpg"
            className="w-50 image-talab "
            alt="Error"
          />
        </div>
      </div>{" "}
      <div className="container d-flex justify-content-center text-center my-3">
        {" "}
        <div className="text_button">
          <a className="text_button-target" rel = "noopener noreferrer" target="_blank" href="/pdf/buklet.pdf">
            Maqolaga qo'yilgan asosiy talablar.pdf{" "}
          </a>
        </div>{" "}
      </div>
      <FooterInfo />
    </>
  );
};

export default Requirimend;
