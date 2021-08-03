import React from "react";
import {TOKEN_LOCAL} from "../../simpleJs/loginApi";
import {getLanguage} from "../../simpleJs/locale";
// ! Wate to backend
export default function PageShop(props) {

    console.log(getLanguage());

  return (
    <div className="Page-shop">
      <div className="Page-slider grid-4-columns" data-item="grid-item">
        {props.jurnal.map((item, index) => {

          return (
            <div className="grid-item grid-3-columns" key={item.id}>
              <div className="product h-100">
                <div className="product-image">
                  {localStorage.getItem(TOKEN_LOCAL) ? (
                    <a
                      target="_blank"
                      href={"https://paycom-test.napaautomotive.uz/storage/" + item.file}
                      // href={
                      //   "https://paycom-test.napaautomotive.uz/storage/" +
                      //   item.file
                      // }
                    >
                        <img
                            alt="#"
                            className="h-100"
                            src={
                                "https://paycom-test.napaautomotive.uz/storage/" +
                                item.image
                            }
                        />
                    </a>
                  ) : (
                    <img
                      alt="#"
                      className="h-100"
                      src={
                        "https://paycom-test.napaautomotive.uz/storage/" +
                        item.image
                      }
                    />
                  )}

                  <div className="product-overlay">
                    <a
                      href={
                        "https://paycom-test.napaautomotive.uz/storage/" +
                        item.image
                      }
                    >
                      Quick View
                    </a>
                  </div>
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <p>{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en: item.title_cril}</p>
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
