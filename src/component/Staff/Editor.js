import React from "react";
import HeaderUpper from "../HeaderUpper";
import FooterInfo from "../FooterInfo"
export default function Editor() {
  const clientData = [
    {
      img: "/images/1Client.jpg",
      subtitle: "Alea Smith",
      title: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      emal: "https://mail.google.com/mail/",
      id: 1,
    },
    {
      img: "/images/2Client.jpg",
      subtitle: "Alea Smith",
      title: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      emal: "https://mail.google.com/mail/",
      id: 2,
    },
    {
      img: "/images/3Client.jpg",
      subtitle: "Alea Smith",
      title: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      emal: "https://mail.google.com/mail/",
      id: 3,
    },
    {
      img: "/images/4Client.png",
      subtitle: "Alea Smith",
      title: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      emal: "https://mail.google.com/mail/",
      id: 4,
    },
  ];
  return (
    <>
      <HeaderUpper />
      <section id="page-content">
        <div class="container">
          <div class="heading-text heading-section text-center">
            <h2>Magazine Editors</h2>
            <span>
              Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel
              dolor. The most happiest time of the day!. Morbi sagittis, sem
              quis lacinia faucibus.{" "}
            </span>
          </div>
          <div className="Team__card">
            {clientData.map((element) => {
              return (
                <div className="team__members" key={element.id}>
                  <div className="team__member">
                    <img
                      alt="#"
                      src={element.img}
                      className="team__member-vesual"
                    ></img>
                  </div>
                  <div className="team__info">
                    <h3 className="team__info-subtitle">{element.subtitle}</h3>
                    <span className="team__info-developer">
                      {element.title}
                    </span>
                    <p className="team__info-lorem">{element.description}</p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.facebook}
                      >
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.twitter}
                        data-width="100"
                      >
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.instagram}
                        data-width="118"
                      >
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.emal}
                        data-width="80"
                      >
                        <i className="icon-mail"></i>
                        <span>Mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr class="space" />
        <div class="seperator">
          <i class="fa fa-chevron-down"></i>
        </div>
        <hr class="space" />
        <div class="container">
          <div class="heading-text heading-section text-center">
            <h2>Development Team</h2>
            <span>
              The most happiest time of the day!. Morbi sagittis, sem quis
              lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
              sapien ut justo. Nulla varius consequat magna, id molestie ipsum
              volutpat quis. A true story, that never been told!. Fusce id mi
              diam, non ornare orci.{" "}
            </span>
          </div>
          <div className="Team__card">
            {clientData.map((element) => {
              return (
                <div className="team__members" key={element.id}>
                  <div className="team__member">
                    <img
                      alt="#"
                      src={element.img}
                      className="team__member-vesual"
                    ></img>
                  </div>
                  <div className="team__info">
                    <h3 className="team__info-subtitle">{element.subtitle}</h3>
                    <span className="team__info-developer">
                      {element.title}
                    </span>
                    <p className="team__info-lorem">{element.description}</p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.facebook}
                      >
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.twitter}
                        data-width="100"
                      >
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.instagram}
                        data-width="118"
                      >
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </a>
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href={element.emal}
                        data-width="80"
                      >
                        <i className="icon-mail"></i>
                        <span>Mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FooterInfo/>
    </>
  );
}
