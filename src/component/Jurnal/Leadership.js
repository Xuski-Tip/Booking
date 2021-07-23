import React from 'react';
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";

const Leadership = () => {
    return (
        <>
            <HeaderUpper/>

            <div className="container">
                <div className="row object  ">
                    <h3 className="w-100 mt-5 text-center">
                        Rahbariyat
                    </h3>
                    <div className="col-12 mt-4 d-flex">
                        <img src="/images/azolar/rahbar.jpg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                Tahrir kengashi raisi:
                            </h5>
                            <h3>Akmal Saidov</h3>
                        </div>
                    </div>
                    <div className="col-12 mt-4 d-flex ">
                        <img src="/images/ErkinErnazarov.jpeg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                Bosh muharrir:
                            </h5>
                            <h3>
                                Erkin Ernazarov</h3>
                        </div>
                    </div>
                </div>
            </div>

            <FooterInfo/>
        </>
    );
};

export default Leadership;