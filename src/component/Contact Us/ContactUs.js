import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer.js";
import axios from "axios";
import { LANGUAGE } from "../../simpleJs/Tipelang";
import SendMessage from "./SendMessage";
import {useTranslation} from "react-i18next";

export default function ContactUs() {
    const {t} = useTranslation();
  const [state, setState] = useState([]);
  const langRename = localStorage.getItem(LANGUAGE);
  useEffect(() => {
    async function fetchMyApi() {
      const res = await axios.get(
        "https://paycom-test.napaautomotive.uz/api/setting"
      );
      setState(res.data.setting);
    }
    fetchMyApi();
  }, []);
  return (
    <div className="body-inner">
      <div className="container">

          <div className="row">
              <div className="">
                  <h2 className="mt-3 contactUs">{t("connect.connect")}</h2>
              </div>
          </div>
        <div className="row d-flex justify-content-between mt-5">

            <div className="col-md-6 col-12 ml-0 pl-0">
                <SendMessage />
            </div>

            <div className="col-md-6 col-12">
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
                                            <i className="fab text-primary fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="social-vimeo">
                                        <a href={element.youtube}>
                                            <i className="fab text-danger fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </section>
                <div className="text-center mt-4">
                    <img src="/imagesNew/map-pin.png" className="mr-2 clockImg"/>
                    <span className="address">Islom Karimov ko’chasi 15 uy</span>
                </div>
            </div>

        </div>


      </div>

    </div>
  );
}
