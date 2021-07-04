import React from "react";
import MapContainer from './MapContainer.js'
class ContactUs extends React.Component {

  render() {
    return (
      <div className="body-inner">
        <section className="no-padding">
            <div className='map'>
            <MapContainer/>
            </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="text-uppercase">Get In Touch</h3>
                <p>
                  The most happiest time of the day!. Suspendisse condimentum
                  porttitor cursus. Duis nec nulla turpis. Nulla lacinia laoreet
                  odio, non lacinia nisl malesuada vel. Aenean malesuada
                  fermentum bibendum.
                </p>
                <p>
                  The most happiest time of the day!. Morbi sagittis, sem quis
                  lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                  sapien ut justo. Nulla varius consequat magna, id molestie
                  ipsum volutpat quis. A true story, that never been told!.
                  Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                  facilisis ut venenatis eu, sodales vel dolor.
                </p>
                <div className="row m-t-40">
                  <div className="col-lg-6">
                    <address>
                      <strong>Polo Office</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      <abbr title="Phone">P: (123) 456-7890</abbr>
                    </address>
                  </div>
                  <div className="col-lg-6">
                    <address>
                      <strong>Polo Office</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      <abbr title="Phone">P: (123) 456-7890</abbr>
                    </address>
                  </div>
                </div>
                <div className="social-icons m-t-30 social-icons-colored">
                  <ul>
                    <li className="social-facebook">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social-twitter">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-google">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="social-pinterest">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li className="social-vimeo">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-vimeo"></i>
                      </a>
                    </li>
                    <li className="social-linkedin">
                      <a href="http://localhost:3000/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="widget-contact-form"
                  noValidate
                  action="https://inspirothemes.com/polo/include/contact-form.php"
                  method="post"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Name</label>
                      <input
                        type="text"
                        aria-required="true"
                        required
                        name="widget-contact-form-name"
                        className="form-control required name"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        aria-required="true"
                        required
                        name="widget-contact-form-email"
                        className="form-control required email"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Your Subject</label>
                      <input
                        type="text"
                        name="widget-contact-form-subject"
                        required
                        className="form-control required"
                        placeholder="Subject..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      type="text"
                      name="widget-contact-form-message"
                      required
                      rows="5"
                      className="form-control required"
                      placeholder="Enter your Message"
                    ></textarea>
                  </div>

                  <button className="btn" type="submit" id="form-submit">
                    <i className="fa fa-paper-plane"></i>&nbsp;Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ContactUs;
