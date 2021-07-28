import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../simpleJs/loginApi";


const RecentWorkSlide = () => {

  const [jurnal12, setJurnal12] = useState([]);

  useEffect(() => {
    axios.get(API + "magazine")
        .then((res) => {
          console.log("salom");
          console.log(res);
          setJurnal12(res.data.magazine.splice(0, 12));
        })
  }, []);


  return (
      <div className="portfolio">
        <div id="portfolio" className="portfolio-6-columns" data-margin="0">
          {jurnal12.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="portfolio-item img-zoom ct-photography ct-marketing ct-media"
                  key={item.id}
                >
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <a href="!#">
                        <img
                          className="portfolio-img"
                          src={"https://paycom-test.napaautomotive.uz/storage/" +item.image}
                          alt=""
                        />
                      </a>
                      <h6 className="mt-2">{item.title_uz}</h6>
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="Paper Pouch!"
                        data-lightbox="image"
                        href={"https://paycom-test.napaautomotive.uz/storage/" +item.image}
                      >
                        {/*<i className="icon-maximize"></i>*/}
                      </a>
                      {/*<a target="_blank" href={item.pdf}>*/}
                      {/*  <i className="icon-link"></i>*/}
                      {/*</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );

}
export default RecentWorkSlide;
