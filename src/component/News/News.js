import React from "react";
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";
class News extends React.Component {
  state = {
    news: {
      news1: {
        img: "images/blog/12.jpg",
        date: "Jan 21, 2017",
        href: "http://localhost:3000/",
        desc: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
      },
      news2: {
        img: "images/blog/12.jpg",
        date: "Jan 21, 2017",
        href: "http://localhost:3000/",
        sub: "Standard post with a single image",
        desc: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
      },
      news2: {
        img: "images/blog/12.jpg",
        date: "Jan 21, 2017",
        href: "http://localhost:3000/",
        sub: "Standard post with a single image",
        desc: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
      },
    },
  };
  render() {
    return (
      <>
        <HeaderUpper />
        <section id="page-content">
          <div className="container">
            <div
              id="blog"
              className=" grid-layout post-3-columns m-b-30 grid-loaded"
              data-item="post-item"
            >
              {Object.keys(this.state.news).map((key) => {
                return (
                  <div key={key} className="post-item border shadow">
                    <div className="post-item-wrap">
                      <div className="post-image">
                        <a href="http://localhost:3000/">
                          <img alt="#" src="images/blog/12.jpg" />
                        </a>
                        <span className="post-meta-category">
                          <a href="http://localhost:3000/">Lifestyle</a>
                        </span>
                      </div>
                      <div className="post-item-description">
                        <span className="post-meta-date">
                          <i className="fa fa-calendar-o"></i>Jan 21, 2017
                        </span>
                        <h2>
                          <a href="http://localhost:3000/">
                            Standard post with a single image
                          </a>
                        </h2>
                        <p>
                          Curabitur pulvinar euismod ante, ac sagittis ante
                          posuere ac. Vivamus luctus commodo dolor porta
                          feugiat. Fusce at velit id ligula pharetra laoreet.
                        </p>
                        <div className="post-author">
                          {" "}
                          <img alt="#" src="images/blog/author.jpg" />
                          <p>
                            by{" "}
                            <a href="http://localhost:3000/">Ardian Musliu</a> 2
                            days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="http://localhost:3000/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="http://localhost:3000/">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <FooterInfo />
      </>
    );
  }
}
export default News;
