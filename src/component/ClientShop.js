import React from "react";
import Slider from "react-slick";
class ClientShop extends React.Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 3,
      infinite: true,
      responsive: [
        {
          breakpoint: 554,
          settings: {
            slidesToShow:2
          }

        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow:1
          }
          
        },
      ],
    };
    return (
      <div className="ClientShop-slider__container">
        <div className="container">
          <Slider {...settings}>
            <div className="ClientShop-slide ">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
            <div className="ClientShop-slide">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
            <div className="ClientShop-slide">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
            <div className="ClientShop-slide">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
            <div className="ClientShop-slide">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
            <div className="ClientShop-slide">
              <div className="ClientShop-slide__wrap">
                <img
                  className="ClientShop-slide__wrap-img"
                  src="../images/five.jpg"
                ></img>
                <div className="ClientShop-slide__wrap-description">
                  <span className="ClientShop-slide__wrap-date">
                    Jan 21, 2017
                  </span>
                  <span className="ClientShop-slide__wrap-date">Comments</span>
                  <h2 className="ClientShop-slide__wrap-comments">
                    <a href="#"> Standard post with a single image</a>
                  </h2>
                  <p className="ClientShop-slide__wrap-lorem">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere
                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                    velit id ligula pharetra laoreet.
                  </p>
                  <a className="ClientShop-slide__wrap-chevron" href="#">
                    Read More
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
                <span className="ClientShop-slide__wrap-link">
                  <a href="#">Lifestyle</a>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default ClientShop;
