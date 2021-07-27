import React from 'react';
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo";

const ArticleLayout = () => {
    return (
        <>
            <HeaderUpper/>
            <div className="container d-flex justify-content-center">
                <img src="/images/background/maqolatartibi.jpg" className="w-100 " alt="Error"/>
            </div>
            <FooterInfo/>
        </>
    );
};

export default ArticleLayout;