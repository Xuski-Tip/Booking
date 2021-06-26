import React from "react";
import RecentWorkSlide from './RecentWorkSlide'
class RecentWork extends React.Component {
  render() {
    return (
      <section className="p-b-0">
        <div className="container">
          <div className="heading-text heading-section">
            <h2>Recent Work</h2>
            <span className="lead">
              Lorem ipsum dolor sit amet, coper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto.
            </span>
          </div>
        </div>
        <RecentWorkSlide/>
      </section>
    );
  }
}
export default RecentWork;
