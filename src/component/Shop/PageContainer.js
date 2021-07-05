import React, { useState } from 'react';
import PageInfo from './PageInfo';
import PageShop from './PageShop';
const PageContainer = () => {
    //!PageInfo
    const [sort, setSort] = useState('plus');
    //!PageShop
    const dataFrom = [
        {
            img: 'https://cdn.fishki.net/upload/post/2017/02/22/2225118/vse-lyudi-goda-s-oblozhki-time-1.jpg',
            hoverImg:
                'https://regnum.ru/uploads/pictures/news/2016/04/22/regnum_picture_1461285953_normal.jpg',
            term: 'NEW',
            category: 'Business',
            title: 'The way of Donald Trump',
            price: 15.0,
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
            price: 215.0,
            rate: 5,
            reviews: 10,
            id: 2,
        },
        {
            img: 'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
            hoverImg:
                'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
            term: 'NEW',
            category: 'Woman',
            title: 'Bolt Sweatshirt',
            price: 45.0,
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
            title: 'Bolt Sweatshirt ssss',
            price: 35.0,
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
            price: 52.0,
            rate: 3,
            reviews: 10,
            id: 5,
        },
        {
            img: 'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'NEW',
            category: 'XZ',
            title: 'Bolt Sweatshirt RRRR',
            price: 305.0,
            rate: 3,
            reviews: 10,
            id: 6,
        },
    ];
    //! one logic for all
    if (sort == 'plus') {
        dataFrom.sort((a, b) => +a.price - +b.price);
        console.log('plus');
    } else if (sort == 'minus') {
        console.log('minus');
        dataFrom.sort((a, b) => +b.price - +a.price);
    }
    return (
        <div>
            <PageInfo sort={sort} setSort={setSort} />
            <PageShop dataFrom={dataFrom} />
        </div>
    );
};

export default PageContainer;
