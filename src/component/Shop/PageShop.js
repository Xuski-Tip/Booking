import React from "react";
// ! Wate to backend
export default function PageShop(props) {
    console.log(props);
  return (
    <div className="Page-shop">
      <div className="Page-slider grid-4-columns" data-item="grid-item">
        {props.jurnal.map((item, index) => {
          return (
              <div className="grid-item grid-3-columns" key={item.id}>
                  <div className="product">
                      <div className="product-image">
                          {index<=props.jurnal.length-8?
                              <a target="_blank" href={index<=props.jurnal.length-8 ? "https://paycom-test.napaautomotive.uz/storage/"+item.file : " "}>
                                <img alt="#" src={"https://paycom-test.napaautomotive.uz/storage/"+item.image} />
                              </a>
                              :
                              <img alt="#" src={"https://paycom-test.napaautomotive.uz/storage/"+item.image} />

                          }

                          <div className="product-overlay">
                              <a href={"https://paycom-test.napaautomotive.uz/storage/"+item.image}>Quick View</a>
                          </div>
                      </div>
                      <div className="product-description">
                          <div className="product-title">
                              <h3>

                              </h3>
                          </div>

                          <div className="product-title">
                              <p>
                                  {item.title_uz}
                              </p>
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
