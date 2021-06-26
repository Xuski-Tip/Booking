import React from "react";
class Slider extends React.Component {
  render() {
    return (
      <>
      <div
        id="slider"
        className="inspiro-slider slider-fullscreen dots-creative"
        data-fade="true">
        <div
          className="slide kenburns"
          data-bg-image="images/slider/notgeneric_bg3.jpg">
          <div className="bg-overlay">
          </div>
          
          <div className="container">
            <div className="slide-captions text-center text-light">
              <span>
                <h1>WELCOME TO THE WORLD Uzbekistan</h1>
                <p>
                  Say hello to the smartest and most flexible bootstrap
                  template. Polo is an powerful template that can build any type
                  of websites, and quite possibly the only one you will ever
                  need.
                </p>
                <div>
                  <a href="#welcome" className="btn scroll-to">
                    Explore more
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="slide" data-bg-video="video/pexels-waves.mp4">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="slide-captions text-left text-light">
              <h1>220+ Laytout Demos</h1>
              <p className="text-small">
                POLO is packed with 220+ pre-made layouts that allow you to
                quickly jumpstart your project. Completely customizable for
                creating your own designs.
              </p>
              <div>
                <a href="#welcome" className="btn scroll-to">
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default Slider;
