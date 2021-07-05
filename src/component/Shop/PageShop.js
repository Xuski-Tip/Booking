import React from 'react';
import { Link } from 'react-router-dom';
const dataFrom = [
    {
        img: 'https://cdn.fishki.net/upload/post/2017/02/22/2225118/vse-lyudi-goda-s-oblozhki-time-1.jpg',
        hoverImg:
            'https://regnum.ru/uploads/pictures/news/2016/04/22/regnum_picture_1461285953_normal.jpg',
        term: 'NEW',
        category: 'Business',
        title: 'The way of Donald Trump',
        price: '$15.00',
        rate: 4,
        reviews: 3,
        id: 1,
    },
    {
        img: 'https://theblueprint.ru/upload/14094m/aaad24c47ab65761ea62a2dd3cfc0f72.jpg',
        hoverImg:
            'https://theblueprint.ru/upload/14094m/aaad24c47ab65761ea62a2dd3cfc0f72.jpg',
        term: 'Popular',
        category: 'Fashion',
        title: 'Vogue',
        price: '$25.00',
        rate: 5,
        reviews: 10,
        id: 2,
    },
    {
        img: 'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
        hoverImg: 'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
        term: 'NEW',
        category: 'Woman',
        title: 'Bolt Sweatshirt',
        price: '$15.00',
        rate: 4,
        reviews: 3,
        id: 3,
    },
    {
        img: 'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
        hoverImg:
            'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
        term: 'NEW',
        category: 'Man',
        title: 'Bolt Sweatshirt TTTTT',
        price: '$55.00',
        rate: 2,
        reviews: 10,
        id: 4,
    },
    {
        img: 'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
        hoverImg:
            'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
        term: 'NEW',
        category: 'XZ',
        title: 'Bolt Sweatshirt TTTTT',
        price: '$222.00',
        rate: 3,
        reviews: 10,
        id: 5,
    },
];
// ! Wate to backend
class PageShop extends React.Component {
    render() {
        return (
            <div className="Page-shop">
                <div
                    className="Page-slider grid-4-columns"
                    data-item="grid-item"
                >
                    {dataFrom.map((element) => {
                        return (
                            <div className="grid-item" key={element.id}>
                                <div className="product">
                                    <div className="product-image">
                                        <Link to={`/Shop/Card/${element.id}`}>
                                            <img alt="#" src={element.img} />
                                        </Link>
                                        <Link to={`/Shop/Card/${element.id}`}>
                                            <img
                                                alt="#"
                                                src={element.hoverImg}
                                            />
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
                                            <a
                                                // to={`/Shop/Card/${element.id}`}
                                                href="shop-product-ajax-page.html"
                                                data-lightbox="ajax"
                                            >
                                                Quick View
                                            </a>
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
                                                {element.reviews} customer
                                                reviews
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
}
export default PageShop;
