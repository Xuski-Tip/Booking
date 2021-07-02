import React from "react";
import Slider from "../component/Slider";
import BackgroundGrey from "../component/BackgroundGrey"
import RecentWork from "./RecentWork"
import Services from "./Services"
import Blog from "./Blog"
import MainClient from "./MainClient";
import FooterInfo from "./FooterInfo";
import LinkerUp from "./LinkerUp";
import HeaderUpper from "./HeaderUpper"
import Header from './Header'



class App extends React.Component {
  render() {
    return (
        <div className='body-inner'>
            <Header/>
            <HeaderUpper/>
            <Slider />
            <BackgroundGrey/>
            <RecentWork/>
            <Services/>
            <Blog/>
            <MainClient/>
            <FooterInfo/>
            <LinkerUp/>
        </div>
    )
        
  }
}
export default App;
