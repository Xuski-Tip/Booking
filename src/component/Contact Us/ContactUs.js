import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer.js";
import axios from "axios";
import { LANGUAGE } from "../../simpleJs/Tipelang";

import SendMessage from "./SendMessage";
export default function ContactUs() {
  const [state, setState] = useState([]);
  const langRename = localStorage.getItem(LANGUAGE);
  useEffect(() => {
    async function fetchMyApi() {
      const res = await axios.get(
        "https://paycom-test.napaautomotive.uz/api/setting"
      );
      setState(res.data.setting);
      console.log(res.data.setting);
    }
    fetchMyApi();
  }, []);
  return (
    <div className="body-inner">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2 className="mt-3">Biz bilan bog'laning</h2>
        </div>
      </div>
      <SendMessage />
      <section className="no-padding">
        <div className="Map">
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
                    {langRename === "en"
                      ? element.address_en
                      : langRename === "ru"
                      ? element.address_ru
                      : langRename === "uz"
                      ? element.address_uz
                      : "error"}
                  </span>
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


    </div>
  );
}
