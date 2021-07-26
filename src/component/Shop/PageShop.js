import React from "react";
import { Link } from "react-router-dom";
// ! Wate to backend
export default function PageShop({ dataFrom }) {

  return (
    <div className="Page-shop">
      <div className="Page-slider grid-4-columns" data-item="grid-item">
        {dataFrom.map((element) => {
          return (
            <div className="grid-item grid-3-columns" key={element.id}>
              <div className="product">
                <div className="product-image">
                  <a href={element.pdf}>
                    <img alt="#" src={element.img} />
                  </a>
                  <div className="product-overlay">
                    <a href={element.img}>Quick View</a>
                  </div>
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h3>
                      <Link
                        to={`/Shop/Card/${element.id}`}
                        data-lightbox="ajax"
                      >
                        {element.subtitle}
                      </Link>
                    </h3>
                  </div>

                  <div className="product-title">
                    <p>
                      <Link
                        to={`/Shop/Card/${element.id}`}
                        data-lightbox="ajax"
                      >
                        {element.title}
                      </Link>
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
