import React from "react";
class FooterInfo extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="widget">
                  <div className="widget-title">Polo HTML5 Template</div>
                  <p className="mb-5">
                    Built with love in Fort Worth, Texas, USA<br></br> All
                    rights reserved. Copyright © 2019. INSPIRO.
                  </p>
                  <a className="btn btn-inverted" target="_blank">
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">Discover</div>
                      <ul className="list">
                        <li>
                          <a>Features</a>
                        </li>
                        <li>
                          <a>Layouts</a>
                        </li>
                        <li>
                          <a>Corporate</a>
                        </li>
                        <li>
                          <a>Updates</a>
                        </li>
                        <li>
                          <a>Pricing</a>
                        </li>
                        <li>
                          <a>Customers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">Features</div>
                      <ul className="list">
                        <li>
                          <a href="#">Layouts</a>
                        </li>
                        <li>
                          <a href="#">Headers</a>
                        </li>
                        <li>
                          <a href="#">Widgets</a>
                        </li>
                        <li>
                          <a href="#">Footers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">Pages</div>
                      <ul className="list">
                        <li>
                          <a>Portfolio</a>
                        </li>
                        <li>
                          <a>Blog</a>
                        </li>
                        <li>
                          <a>Shop</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">Support</div>
                      <ul className="list">
                        <li>
                          <a>Help Desk</a>
                        </li>
                        <li>
                          <a >Documentation</a>
                        </li>
                        <li>
                          <a>Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-content">
          <div className="container">
            <div className="copyright-text text-center">
              &copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template. All
              Rights Reserved.
              <a
                href="#"
                target="_blank"
                rel="noopener"
              >
                {" "}
                INSPIRO
              </a>{" "}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterInfo;
