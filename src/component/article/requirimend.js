import React from 'react';
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";

const Requirimend = () => {
    return (
        <>
            <HeaderUpper/>
            <div className="bglight">
                <div className="container d-flex justify-content-center">
                    <img src="/images/background/maqolatalabi.jpg" className=" " alt="Error"/>
                </div>
            </div>
            <div className="container text-center my-3">
                <a target="_blank" href="/pdf/buklet.pdf">
                    Maqolaga qo'yilgan asosiy talablar.pdf
                </a>
            </div>
            <FooterInfo/>
        </>
    );
};

export default Requirimend;