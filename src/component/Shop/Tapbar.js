import React from "react";
class Tapbar extends React.Component {
  render() {
    return (
      <div id="topbar" className="topbar-fullwidth d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="top-menu">
                <li>
                  <a href="tel:+998712391358">
                    Contact Phone +998 71 239 13 58
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/">
                    Our address st. Islam Karimov 15
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-none d-sm-block">
              <div className="social-icons social-icons-colored-hover">
                <ul>
                  <li className="social-facebook">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-twitter">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-google">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li className="social-pinterest">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="social-vimeo">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-vimeo"></i>
                    </a>
                  </li>
                  <li className="social-linkedin">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-dribbble">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li className="social-youtube">
                    <a href="http://localhost:3000/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="social-rss">
                    <a href="http://localhost:3000/">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tapbar;
