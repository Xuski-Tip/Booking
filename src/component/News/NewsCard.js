import React from "react";
const NewsCard = ({ news, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      <div
        id="blog"
        className="News-Flexing post-3-columns m-b-30"
        data-item="post-item"
      >
        {news.map((news, i) => {
          console.log(news);
          return (
            <div key={i} className="post-item border shadow">
              <div className="post-item-wrap">
                <div className="post-image">
                  <a href="!#">
                    <img className='post-images' alt="" src={news.image} />
                  </a>
                </div>
                <div className="post-item-description">
                  <span className="post-meta-date">
                    <i className="fa fa-calendar-o"></i>Jan 21, 2017
                  </span>
                  <h2>
                    <a href="!#">Standard post with a single image</a>
                  </h2>
                  <p>
                   {
                     news.meta_description_en
                   }
                  </p>
                  <div className="post-author">
                    {" "}
                    <img alt='#' src="images/blog/author.jpg" />
                    <p>
                      by <a  href="!#">Ardian Musliu</a> 2 days ago{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NewsCard;
