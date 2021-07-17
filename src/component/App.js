import React, { useState, useEffect } from "react";
import Slider from "../component/Slider";
import BackgroundGrey from "../component/BackgroundGrey";
import RecentWork from "./RecentWork";
import Services from "./Services";
import Blog from "./Blog";
import MainClient from "./MainClient";
import FooterInfo from "./FooterInfo";
import LinkerUp from "./LinkerUp";
import HeaderUpper from "./HeaderUpper";
import ContactUs from "./Contact Us/ContactUs";
import Header from "./Header";
import {ToastContainer} from "react-toastify";
function App() {
  const [state] = useState('en')
  console.log(state);

  return (
    <div className="body-inner">
      <Header />
      <HeaderUpper />
      <Slider />
      <BackgroundGrey />
      <RecentWork />
      <Services />
      <Blog />
      <MainClient />
      <ContactUs />
      <FooterInfo />
      <LinkerUp />
      <ToastContainer/>
    </div>
  );
}
export default App;
