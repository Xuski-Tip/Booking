import React from "react";

import { Link } from "react-router-dom";
class Slider extends React.Component {
  render() {
    return (
      <>
        <div className="MainHeader">
          <div className="MainSlider slide kenburns">
            <div className="MainSlider__bg slide-captions text-center text-light">
              <img
                alt="#"
                src="/images/MainBackground.jpg"
                className="MainSlider__bg-img"
              ></img>
              <div className="MainSlider__bg-black"></div>
              <h1 className="MainSlider__subtitle">
                WELCOME TO THE WORLD OF UZBEKISTAN
              </h1>
              <p className="MainSlider__lorem">
                The magazine has been published regularly since 1999
              </p>
              <div>
                <a href="#welcome" className="btn scroll-to">
                  Explore more
                </a>
              </div>
            </div>
          </div>
          <div className="MainBg__right">
            <Link to="/Shop">
              <img
                alt="#"
                className="MainBg__right-img"
                src="/images/Main-bg-right.jpg"
              ></img>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Slider;
