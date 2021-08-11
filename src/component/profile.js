import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API, LOGIN} from "../simpleJs/loginApi";
import HeaderUpper from "./HeaderUpper";
import FooterInfo from "./FooterInfo";

const Profile = () => {

    const [me, setMe] = useState({});
    const headers = {
        'Authorization': localStorage.getItem(LOGIN)
    };
    useEffect(() => {
        axios.get(API + "me", {headers: headers})
            .then((res) => {
                console.log("me");
                console.log(res)
            })

    }, []);

    return (
        <div>
            <HeaderUpper/>


            <FooterInfo/>
        </div>
    );
};

export default Profile;