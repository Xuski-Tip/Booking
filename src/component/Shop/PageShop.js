import React from 'react';
import { Link } from 'react-router-dom';
// ! Wate to backend
export default function PageShop({ dataFrom }) {
    return (
        <div className="Page-shop">
            <div className="Page-slider grid-4-columns" data-item="grid-item">
                {dataFrom.map((element) => {
                    return (
                        <div className="grid-item" key={element.id}>
                            <div className="product">
                                <div className="product-image">
                                    <Link to={`/Shop/Card/${element.id}`}>
                                        <img alt="#" src={element.img} />
                                    </Link>
                                    <Link to={`/Shop/Card/${element.id}`}>
                                        <img alt="#" src={element.hoverImg} />
                                    </Link>
                                    <span className="product-new">
                                        {element.term}
                                    </span>
                                    <span className="product-wishlist">
                                        <a href="http://localhost:3000/">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                    </span>
                                    <div className="product-overlay">
                                        <Link
                                            to={`/Shop/Card/${element.id}`}
                                            data-lightbox="ajax"
                                        >
                                            Quick View
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <div className="product-category">
                                        {element.category}
                                    </div>
                                    <div className="product-title">
                                        <h3>
                                            <a href="http://localhost:3000/">
                                                {element.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="product-price">
                                        <ins>{element.price}</ins>
                                    </div>
                                    <div className="product-rate">
                                        {new Array(element.rate)
                                            .fill(element.rate)
                                            .map((e, index) => (
                                                <i
                                                    key={index}
                                                    className="fa fa-star"
                                                ></i>
                                            ))}
                                    </div>
                                    <div className="product-reviews">
                                        <a href="http://localhost:3000/">
                                            {element.reviews} customer reviews
                                        </a>
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
