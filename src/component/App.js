import React, {useEffect, useState} from "react";
import Sliderr from "../component/Slider";
import BackgroundGrey from "../component/BackgroundGrey";
import RecentWork from "./RecentWork";
import FooterInfo from "./FooterInfo";
import LinkerUp from "./LinkerUp";
import HeaderUpper from "./HeaderUpper";
import ContactUs from "./Contact Us/ContactUs";
import Header from "./Header";
import {ToastContainer} from "react-toastify";
import Muassis from "./Contact Us/Muassis";

function App(props) {
  const [state] = useState('en');
  console.log(props.history);

  useEffect(() => {
      window.scrollTo(0, 0);
  });

  return (
    <div className="body-inner">
      <Header />
      <HeaderUpper his={props.history}/>
      <Sliderr his={props.history}/>
      <BackgroundGrey />
      <RecentWork histor={props.history}/>
      <Muassis/>
      <ContactUs />
      <FooterInfo />
      <LinkerUp />
      <ToastContainer/>
    </div>
  );
}
export default App;
