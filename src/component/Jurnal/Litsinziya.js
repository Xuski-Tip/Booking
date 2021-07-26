import React from "react";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";

const Litsinziya = () => {
  return (
    <>
      <HeaderUpper />
      <div className="">
        <div className="container d-flex justify-content-center">
          <img
            src="/images/letsenziya.jpg"
            className="letsenziya-img"
            alt="Error"
          />
        </div>
      </div>{" "}
      <div className="container d-flex justify-content-center text-center my-3">
        {" "}
        <div className="text_button">
          <a className="text_button-target" target="_blank" href="/pdf/Лицензия гувохнома.pdf">
          гувохнома.pdf{" "}
          </a>
        </div>{" "}
      </div>
      <FooterInfo />
    </>
  );
};

export default Litsinziya;
