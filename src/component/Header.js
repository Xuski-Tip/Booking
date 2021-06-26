import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="moreInfo">
        <div className="moreInfo__logo">
          <img className="moreInfo__logo-img" src=""></img>
          <p className="moreInfo__logo-lorem"><a href='#'><span className='moreInfo__logo-dawnText'>Official site</span><br></br><span>of the National Center</span><br></br> <span>for Human Rights of the Republic</span><br></br><span>of Uzbekistan</span></a></p>
        </div>
        <nav className="moreInfo__navigation">
          <ul className="moreInfo__navigation-mainList">
            <li className="moreInfo__navigation-list">
              <img src="" className="moreInfo__navigation-img"></img>
              <div className="moreInfo__navigation-container">
                <span className="moreInfo__navigation-lorem--upp"><a href='#'>Contact Phone</a></span>
                <span className="moreInfo__navigation-lorem--dawn"><a href='tel:+998712391358'>+998  71  239 13 58</a></span>
              </div>
            </li>
            <li className="moreInfo__navigation-list">
              <img src="" className="moreInfo__navigation-img"></img>
              <div className="moreInfo__navigation-container">
                <span className="moreInfo__navigation-lorem--upp"><a href='#'>Our address</a></span>
                <span className="moreInfo__navigation-lorem--dawn"><a href='#'>st. Islam Karimov 15</a></span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
