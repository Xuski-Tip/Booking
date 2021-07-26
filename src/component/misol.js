import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API} from "../simpleJs/loginApi";

const Misol = () => {

    const [jurnal, setJurnal] = useState([]);
    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                console.log(res);
                console.log("Salom");
                setJurnal(res.data.magazine)
            })
    }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    jurnal.map((item, index) => {
                        return(
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <img src={API + item.image} alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h3>{item.content_uz}</h3>
                                        <a href={item.file}>pdf</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Misol;