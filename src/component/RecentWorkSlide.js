import React from "react";
const recentData = [
  {
    img: "/images/arxive1.jpg",
    id: 1,
    subtitle: "журнали 2021 йил 1-сони мундарижаси",
  },
  {
    img: "/images/arxive2.jpg",
    id: 2,
    subtitle: "журнали 2020 йил 4-сони мундарижаси",
  },
  {
    img: "/images/arxive3.jpg",
    id: 3,
    subtitle: "журнали 2020 йил 3-сони мундарижаси",
  },
  {
    img: "/images/arxive4.jpg",
    id: 4,
    subtitle: "журнали 2020 йил 2-сони мундарижаси",
  },
  {
    img: "/images/arxive5.jpg",
    id: 5,
    subtitle: "журнали 2020 йил 2-сони мундарижаси",
  },
  {
    img: "/images/arxive6.jpg",
    id: 6,
    subtitle: "журнали 2020 йил 1-сони мундарижаси",
  },

  {
    img: "/images/arxive7.jpg",
    id: 7,
    subtitle: "журнали 2019 йил 3-сони мундарижаси",
  },
  {
    img: "/images/arxive8.jpg",
    id: 8,
    subtitle: "журнали 2019 йил 2-сони мундарижаси",
  },
];
class RecentWorkSlide extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div id="portfolio" className="portfolio-6-columns" data-margin="0">
          {recentData.map((element) => {
            return (
              <div key={element.id}>
                <div
                  className="portfolio-item img-zoom ct-photography ct-marketing ct-media"
                  key={element.id}
                >
                  <h6 className="recent-subtitle">{element.subtitle}</h6>
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <a href="!#">
                        <img
                          className="portfolio-img"
                          src={element.img}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="Paper Pouch!"
                        data-lightbox="image"
                        href={element.img}
                      >
                        <i className="icon-maximize"></i>
                      </a>
                      <a href="portfolio-page-grid-gallery.html">
                        <i className="icon-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default RecentWorkSlide;
