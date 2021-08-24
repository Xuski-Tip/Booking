import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API, API_PATH, LOGIN} from "../simpleJs/loginApi";
import HeaderUpper from "./HeaderUpper";
import FooterInfo from "./FooterInfo";
import {getLanguage} from "../simpleJs/locale";
import {toast} from "react-toastify";

const Profile = (props) => {

    const [me, setMe] = useState({});
    const [magazine, setMagazine] = useState([]);
    const [magazine2, setMagazine2] = useState([]);
    const headers = {
        "Authorization": localStorage.getItem(LOGIN)
    };
    useEffect(() => {
        axios.get(API + "me", {headers: headers})
            .then((res) => {
                setMe(res.data.user);
                console.log("me");
                console.log(res)
            })

        axios.get(API + "mymagazine", {headers: headers})
            .then((res2) => {
                if (res2.data.status === "success") {
                    setMagazine(res2.data.user)
                } else if (res2.data.status === "Token is Expired" || res2.data.status === "Authorization Token not found") {
                    props.history.push("/Authorization");
                    toast.warning(res2.data.status)
                }
            })

        axios.get(API + "magazine")
            .then((res3) => {
                setMagazine2(res3.data.magazine)
                console.log("magazine2");
                console.log(res3)
            })


    }, []);

    return (
        <div>
            <HeaderUpper/>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-6 offset-3 mt-5">
                        <div className="card profilePage">
                            <div className="card-body">
                               <div className="text-center">
                                   <img src="./images/profileIcon2.png" className="profileIcon"/></div>
                                <h4 className="mt-3 profileText">Ism : {me?.name}</h4>
                                <h4 className="mb-3 profileText">E-mail : {me?.email}</h4>
                                <h4 className="mb-3 profileText">Sotib olingan jurnallar :</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    {magazine?.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6 mt-3">
                                <div className="card h-100">
                                    <img src={API_PATH + "storage/" + item.image} className="profileImg"/>
                                    <h6 className="text-center">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <FooterInfo/>
        </div>
    );
};

export default Profile;