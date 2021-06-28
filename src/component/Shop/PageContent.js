import React from "react";
import PageInfo from "./PageInfo";
import PageShop from "./PageShop";
class PageContent extends React.Component {
  render() {
    return (
      <>
        <PageInfo />
        <PageShop />
        <footer id="footer" className=' Page-footer'>
          <div className="footer-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="widget">
                    <div className="widget-title">Polo HTML5 Template</div>
                    <p className="mb-5">
                      Built with love in Fort Worth, Texas, USA<br></br>
                      All rights reserved. Copyright © 2019. INSPIRO.
                    </p>
                    <a
                      href="http://localhost:3000/"
                      className="btn btn-inverted"
                    >
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
                            <a href="http://localhost:3000/">Features</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Layouts</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Corporate</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Updates</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Pricing</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Customers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="widget">
                        <div className="widget-title">Features</div>
                        <ul className="list">
                          <li>
                            <a href="http://localhost:3000/">Layouts</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Headers</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Widgets</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Footers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="widget">
                        <div className="widget-title">Pages</div>
                        <ul className="list">
                          <li>
                            <a href="http://localhost:3000/">Portfolio</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Blog</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Shop</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="widget">
                        <div className="widget-title">Support</div>
                        <ul className="list">
                          <li>
                            <a href="http://localhost:3000/">Help Desk</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Documentation</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/">Contact Us</a>
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
                <a href="http://www.inspiro-media.com/" rel="noopener">
                  INSPIRO
                </a>{" "}
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default PageContent;
