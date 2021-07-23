import React from 'react';
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";

const Leadership = () => {
    return (
        <>
            <HeaderUpper/>

            <div className="container">
                <div className="row">
                    <h3 className="w-100 mt-5 text-center">
                        Rahbariyat
                    </h3>
                    <div className="col-12 mt-4 d-flex">
                        <img src="/images/azolar/rahbar.jpg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">Инсон ҳуқуқлари бўйича Ўзбекистон Республикаси Миллий марказининг директори</h5>
                            <h3>Саидов Акмал Холматович</h3>
                        </div>
                    </div>
                    <div className="col-12 mt-4 d-flex ">
                        <img src="/images/azolar/zamragbar.jpg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                Директорнинг биринчи ўринбосари
                            </h5>
                            <h3>
                                Тиллабаев Мирзатилло Алишерович</h3>
                        </div>
                    </div>
                </div>
            </div>

            <FooterInfo/>
        </>
    );
};

export default Leadership;