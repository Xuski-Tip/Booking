import React from "react";
import Slider from "react-slick";
import FooterInfo from "../../FooterInfo";
import Tapbar from "../Tapbar";
import HeaderUpper from "../../HeaderUpper";
class InfoCard extends React.Component {
  render() {
    function ofclick(event) {
      event.preventDefault()
    }
    const settings = {
      dots: true,
      speed: 500,
    };
    return (
      <>
        <Tapbar/>
        <HeaderUpper/>
        <section id="product-page" className="product-page p-b-0">
          <div className="container">
            <div className="product">
              <div className="row m-b-40">
                <div className="col-lg-5">
                  <Slider {...settings}>
                    <div className="product-cart">
                       <img
                        alt='#'
                        className="product_images"
                        src="images/Two.jpg"
                      ></img>
                    </div>
                    <div className="product-cart">
                       <img
                       alt='#'
                        className="product_images"
                        src="images/Two.jpg"
                      ></img>
                    </div>
                    <div className="product-cart">
                       <img
                       alt='#'
                        className="product_images"
                        src="images/Two.jpg"
                      ></img>
                    </div>
                  </Slider>
                </div>
                <div className="col-lg-7">
                  <div className="product-description">
                    <div className="product-category">Women</div>
                    <div className="product-title">
                      <h3>
                        <a onClick={ofclick} href="http://localhost:3000/">Consume Tshirt</a>
                      </h3>
                    </div>
                    <div className="product-price">
                      <ins>$39.00</ins>
                    </div>
                    <div className="product-rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <div className="product-reviews">
                      <a onClick={ofclick} href="http://localhost:3000/">3 customer reviews</a>
                    </div>
                    <div className="seperator m-b-10"></div>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                    </p>
                    <div className="product-meta">
                      <p>
                        Tags:{" "}
                        <a onClick={ofclick} href="http://localhost:3000/" rel="tag">
                          Clothing
                        </a>
                        ,{" "}
                        <a rel="tag"onClick={ofclick} href="http://localhost:3000/">
                          T-shirts
                        </a>
                      </p>
                    </div>
                    <div className="seperator m-t-20 m-b-10"></div>
                  </div>
                </div>
              </div>

              <div className="tabs tabs-folder">
                <ul className="nav nav-tabs" id="myTab3" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      id="home-tab"
                      data-toggle="tab"
                      onClick={ofclick} href="http://localhost:3000/"
                      role="tab"
                      aria-controls="home"
                      aria-selected="false"
                    >
                      <i className="fa fa-align-justify"></i>Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent3">
                  <div
                    className="tab-pane fade active show"
                    id="home3"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut rerum necessitatibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae non recusandae.{" "}
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="profile3"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <table className="table table-striped table-bordered">
                      <tbody>
                        <tr>
                          <td>Size</td>
                          <td>Small, Medium &amp; Large</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Pink &amp; White</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>26 cm</td>
                        </tr>
                        <tr>
                          <td>Length</td>
                          <td>40 cm</td>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>33 inches</td>
                        </tr>
                        <tr>
                          <td>Fabric</td>
                          <td>Cotton, Silk &amp; Synthetic</td>
                        </tr>
                        <tr>
                          <td>Warranty</td>
                          <td>3 Months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="comments" id="comments">
                      <div className="comment_number">
                        Reviews <span>(3)</span>
                      </div>
                      <div className="comment-list">
                        <div className="comment" id="comment-1">
                          <div className="image">
                            <img
                              alt="#"
                              src="images/blog/author.jpg"
                              className="avatar"
                            />
                          </div>
                          <div className="text">
                            <div className="product-rate">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <h5 className="name">John Doe</h5>
                            <span className="comment_date">
                              Posted at 15:32h, 06 December
                            </span>
                            <a className="comment-reply-link" onClick={ofclick} href="http://localhost:3000/">
                              Reply
                            </a>
                            <div className="text_holder">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="comment" id="comment-1-1">
                          <div className="image">
                            <img
                              alt="#"
                              src="images/blog/author2.jpg"
                              className="avatar"
                            />
                          </div>
                          <div className="text">
                            <div className="product-rate">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <h5 className="name">John Doe</h5>
                            <span className="comment_date">
                              Posted at 15:32h, 06 December
                            </span>
                            <a className="comment-reply-link" onClick={ofclick} href="http://localhost:3000/">
                              Reply
                            </a>
                            <div className="text_holder">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="comment" id="comment-1-2">
                          <div className="image">
                            <img
                              alt="#"
                              src="images/blog/author3.jpg"
                              className="avatar"
                            />
                          </div>
                          <div className="text">
                            <div className="product-rate">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <h5 className="name">John Doe</h5>
                            <span className="comment_date">
                              Posted at 15:32h, 06 December
                            </span>
                            <a className="comment-reply-link" onClick={ofclick} href="http://localhost:3000/">
                              Reply
                            </a>
                            <div className="text_holder">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alter#ation in some form, by injected humour.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterInfo/>
      </>
    );
  }
}
export default InfoCard;
