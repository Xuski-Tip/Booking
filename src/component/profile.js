import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API} from "../simpleJs/loginApi";
import HeaderUpper from "./HeaderUpper";
import FooterInfo from "./FooterInfo";

const Profile = () => {

    const [me, setMe] = useState({});

    useEffect(() => {
        axios.get(API + "me")
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