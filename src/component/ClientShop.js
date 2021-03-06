import React from "react";
import Slider from "react-slick";
function ClientShop() {
  const BlogData = [
    {
      id: 1,
      img: "/images/One.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
    {
      id: 2,
      img: "/images/Two.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
    {
      id: 3,
      img: "/images/three.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
    {
      id: 4,
      img: "/images/three.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
    {
      id: 5,
      img: "/images/three.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
    {
      id: 6,
      img: "/images/three.jpg",
      date: "Jan 21, 2017",
      title: "Standard post with a single image",
      description:
        "Curabitur pulvinar euismod ante, ac sagittis ante posuereac. Vivamus luctus commodo dolor porta feugiat. Fusce atelit id ligula pharetra laoreet",
    },
  ];
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#888888",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#888888",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="container">
      <div id="blog" className="post-3-columns m-b-30">
        <Slider {...settings}>
          {BlogData.map((element) => {
            return (
              <div className="ClientShop-slide " key={element.id}>
                <div className="ClientShop-slide__wrap">
                  <img
                    alt="#"
                    className="ClientShop-slide__wrap-img"
                    src={element.img}
                  ></img>
                  <div className="ClientShop-slide__wrap-description">
                    <span className="ClientShop-slide__wrap-date">
                      {element.date}
                    </span>
                    <span className="ClientShop-slide__wrap-date">
                      Comments
                    </span>
                    <h2 className="ClientShop-slide__wrap-comments">
                      <a href="http://localhost:3000/">{element.title}</a>
                    </h2>
                    <p className="ClientShop-slide__wrap-lorem">
                      {element.description}
                    </p>
                    <a
                      className="ClientShop-slide__wrap-chevron"
                      href="http://localhost:3000/"
                    >
                      Read More
                      <i className="icon-chevron-right"></i>
                    </a>
                  </div>
                  <span className="ClientShop-slide__wrap-link">
                    <a href="http://localhost:3000/">Lifestyle</a>
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default ClientShop;
