import React from "react";
// ! Wate to backend
export default function PageShop(props) {
  return (
    <div className="Page-shop">
      <div className="Page-slider grid-4-columns" data-item="grid-item">
        {props.jurnal.map((item, index) => {
          return (
            <div className="grid-item grid-3-columns" key={item.id}>
              <div className="product">
                <div className="product-image">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://paycom-test.napaautomotive.uz/storage/" +
                      item.file
                    }
                  >
                    <img
                      alt="#"
                      src={
                        "https://paycom-test.napaautomotive.uz/storage/" +
                        item.image
                      }
                    />
                  </a>

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
                  <div>
                    <p className="product-title">{item.title_uz}</p>
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
