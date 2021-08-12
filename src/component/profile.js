import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API, LOGIN} from "../simpleJs/loginApi";
import HeaderUpper from "./HeaderUpper";
import FooterInfo from "./FooterInfo";
import {getLanguage} from "../simpleJs/locale";

const Profile = () => {

    const [me, setMe] = useState({});
    const [magazine , setMagazine] = useState([]);
    const [magazine2 , setMagazine2] = useState([]);
    const headers = {
        "Authorization" : localStorage.getItem(LOGIN)
    };
    useEffect(() => {
        axios.get(API + "me" , {headers:headers})
            .then((res) => {
                setMe(res.data.user);
                console.log("me");
                console.log(res)
            })

        axios.get(API + "mymagazine" , {headers:headers})
            .then((res2) => {
                setMagazine(res2.data.user)
                console.log("magazine");
                console.log(res2)
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
  <div className="col-6 offset-3 text-center mt-3">
              <img src="./images/profileIcon2.png" className="profileIcon"/>
              <h4 className="mt-3">Ism : {me?.name}</h4>
              <h4 className="mb-3">E-mail : {me?.email}</h4>
              <h4 className="mb-3">Sotib olingan jurnallar</h4>
  </div>
                </div>
                <div className="row mt-3">
                    {magazine?.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-6 mt-3">
                                <div className="card h-100">
                                    <img src={"https://backend-magazine.napaautomotive.uz/" + "storage/" + item.image} className="profileImg"/>
                                    <h6 className="text-center">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en: item.title_cril}</h6>
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