import React from "react";
import HeaderUpper from "../HeaderUpper";
import PageInfo from "./PageInfo";
import PageShop from "./PageShop";
import FooterInfo from "../FooterInfo";
import Tapbar from "./Tapbar";
class Header extends React.Component {
  render() {
    return (
      <>
        <Tapbar/>
        <HeaderUpper />
        <div className="container-fluid">
          <PageInfo />
          <PageShop />
        </div>
        <FooterInfo />
      </>
    );
  }
}
export default Header;
