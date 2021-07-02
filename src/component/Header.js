import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="moreInfo">
        <div className="moreInfo__logo">
          <a href="http://localhost:3000/">
            <img
              alt="#"
              className="moreInfo__logo-img"
              src="/images/Logomain.jpg"
            ></img>
          </a>
          <p className="moreInfo__logo-lorem">
            <a href="http://localhost:3000/">
              <span className="moreInfo__logo-dawnText">Official site</span>
              <br></br>
              <span>of the National Center</span>
              <br></br> <span>for Human Rights of the Republic</span>
              <br></br>
              <span>of Uzbekistan</span>
            </a>
          </p>
        </div>
        <div className='TextDemocratic'>
          {" "}
          «DEMOCRATIZATION AND HUMAN RIGHTS» <br></br> scientific and educational journal{" "}
        </div>
        <nav className="moreInfo__navigation">
          <ul className="moreInfo__navigation-mainList">
            <li className="moreInfo__navigation-list">
              <a href="tel:+998712391358">
                <img
                  alt="#"
                  src="/images/free-icon-phone-call-126509.png"
                  className="moreInfo__navigation-img"
                ></img>
              </a>
              <div className="moreInfo__navigation-container">
                <span className="moreInfo__navigation-lorem--upp">
                  <a href="http://localhost:3000/">Contact Phone</a>
                </span>
                <span className="moreInfo__navigation-lorem--dawn">
                  <a href="tel:+998712391358">+998 71 239 13 58</a>
                </span>
              </div>
            </li>
            <li className="moreInfo__navigation-list">
              <a href="http://localhost:3000/">
                <img
                  alt="#"
                  src="/images/free-icon-placeholder-1180805.png"
                  className="moreInfo__navigation-img"
                ></img>
              </a>
              <div className="moreInfo__navigation-container">
                <span className="moreInfo__navigation-lorem--upp">
                  <a href="http://localhost:3000/">Our address</a>
                </span>
                <span className="moreInfo__navigation-lorem--dawn">
                  <a href="http://localhost:3000/">st. Islam Karimov 15</a>
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
