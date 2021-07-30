import React, {useEffect, useState} from "react";
import Slider from "../component/Slider";
import BackgroundGrey from "../component/BackgroundGrey";
import RecentWork from "./RecentWork";
import FooterInfo from "./FooterInfo";
import LinkerUp from "./LinkerUp";
import HeaderUpper from "./HeaderUpper";
import ContactUs from "./Contact Us/ContactUs";
import Header from "./Header";
import {ToastContainer} from "react-toastify";
function App() {
  const [state] = useState('en');
  // console.log(state);

  useEffect(() => {
      window.scrollTo(0, 0);
  });

  return (
    <div className="body-inner">
      <Header />
      <HeaderUpper />
      <Slider />
      <BackgroundGrey />
      <RecentWork />
      <ContactUs />
      <FooterInfo />
      <LinkerUp />
      <ToastContainer/>
    </div>
  );
}
export default App;
