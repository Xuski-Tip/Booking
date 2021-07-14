import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer.js";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function ContactUs() {
  const [state, setState] = useState([]);
  const [answerstate, setAnswer] = useState("");
  useEffect(() => {
    async function fetchMyApi() {
      const res = await axios.get(
        "https://paycom-test.napaautomotive.uz/api/setting"
      );
      setState(res.data.setting);
    }
    fetchMyApi();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://paycom-test.napaautomotive.uz/api/contact/store",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }
      );
      setAnswer("success");
    } catch (error) {
      setAnswer("danger");
    }
  };
  return (
    <div className="body-inner">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse
            condimentum porttitor cursumus.
          </p>
        </div>
      </div>
      <section className="no-padding">
        <div className="map">
          <MapContainer />
        </div>
        {state.map((element) => {
          return (
            <div
              key={element.id}
              className=""
              style={{
                position: "absolute",
                left: 20,
                top: 50,
                zIndex: 6000,
                backgroundColor: "#bebec4",
                borderRadius: 5,
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
              }}
            >
              <div className="wrapcontact">
                <div className="adressdflex">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  &nbsp;
                  <span>
                    
                  </span>
                  <span>{element.address_ru}</span>
                </div>
                <br />
                <div className="adressdflex" title="Phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  &nbsp;{" "}
                  <a style={{ color: "black" }} href={`tel:${element.phone}`}>
                    {element.phone}
                  </a>
                </div>
                <br />
                <div className="adressdflex">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  &nbsp;
                  <a
                    style={{ color: "black" }}
                    href={`mailto:${element.email}`}
                  >
                    {element.email}
                  </a>
                </div>
                <br />
                <div className="adressdflex">
                  <i className="fa fa-clock" aria-hidden="true"></i>
                  &nbsp;
                  {element.work_day}
                </div>
              </div>
              <div className="social-icons  social-icons-colored adressdflex wrapcontact">
                <ul>
                  <li className="social-facebook">
                    <a href={element.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-twitter">
                    <a href={element.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="social-google">
                    <a href={element.telegram}>
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li className="social-vimeo">
                    <a href={element.youtube}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <div className="container">
          <div
            className="row"
            style={{
              justifyContent: "center",
            }}
          >
            <div className="col-lg-7">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="widget-contact-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      {...register("name", {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z\s]/,
                        },
                        maxlength: 15,
                      })}
                      type="text"
                      name="name"
                      className="form-control required name"
                      placeholder="Enter your Name"
                    />
                    {errors.name && <p>invalid name</p>}
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                      })}
                      type="email"
                      name="email"
                      className="form-control required email"
                      placeholder="Enter your Email"
                    />
                    {errors.email && <p>invalid email address</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Your Number</label>
                    <input
                      {...register("phone", {
                        required: true,
                        minLength: 6,
                        maxLength: 14,
                      })}
                      pattern="\d*"
                      type="tel"
                      name="phone"
                      className="form-control required"
                      placeholder="Phone number"
                    />
                    {errors.phone && <p>invalid phone number</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    {...register("message", {
                      required: true,
                      maxLength: 100,
                    })}
                    type="text"
                    name="message"
                    rows="5"
                    className="form-control required"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>

                <button className="btn" type="submit" id="form-submit">
                  <i className="fa fa-paper-plane"></i>
                  &nbsp;Send message
                </button>
              </form>
              {answerstate && (
                <div className={`alert alert-${answerstate}`} role="alert">
                  {answerstate.toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
