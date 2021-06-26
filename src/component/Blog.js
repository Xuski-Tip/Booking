import React from "react";
import ClientShop from "./ClientShop"
class Blog extends React.Component {
  render() {
    return (
      <section className="content  background-grey">
        <div className="container">
          <div className="heading-text heading-section">
            <h2>OUR BLOG</h2>
            <span className="lead">
              The most happiest time of the day!. Morbi sagittis, sem quis
              lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
              sapien ut justo. Nulla varius consequat magna, id molestie ipsum
              volutpat quis. A true story, that never been told!. Fusce id mi
              diam, non ornare orci. Pellentesque ipsum erat, facilisis ut
              venenatis eu, sodales vel dolor.{" "}
            </span>
          </div>
        </div>
        <ClientShop/>
      </section>
    );
  }
}
export default Blog;
