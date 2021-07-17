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
