import React from 'react';
import PageInfo from './PageInfo';
import PageShop from './PageShop';
const PageContainer = () => {

    const dataFrom = [
        {
            img: '/images/arxive1.jpg',
            hoverImg:
                "",
            term: 'Free',
            category: 'Business',
            subtitle: 'The way of Donald Trump',
            price: null,
            rate: 4,
            reviews: 3,
            id: 1,
        },
        {
            img: '/images/arxive2.jpg',
            hoverImg:
                'https://theblueprint.ru/upload/14094m/aaad24c47ab65761ea62a2dd3cfc0f72.jpg',
            term: 'Paid',
            category: 'Fashion',
            subtitle: 'Vogue',
            price: 45.0,
            rate: 5,
            reviews: 10,
            id: 2,
        },
        {
            img: '/images/arxive3.jpg',
            hoverImg:
                'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
            term: 'Free',
            category: 'Woman',
            subtitle: 'Bolt Sweatshirt',
            price: null,
            rate: 4,
            reviews: 3,
            id: 3,
        },
        {
            img: '/images/arxive4.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'Paid',
            category: 'Man',
            subtitle: 'Bolt Sweatshirt ssss',
            price: 35.0,
            rate: 2,
            reviews: 10,
            id: 4,
        },
        {
            img: '/images/arxive5.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'Free',
            category: 'XZ',
            subtitle: 'Bolt Sweatshirt TTTTT',
            price: null,
            rate: 3,
            reviews: 10,
            id: 5,
        },
        {
            img: '/images/arxive6.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'Paid',
            category: 'XZ',
            subtitle: 'Bolt Sweatshirt RRRR',
            price: 305.0,
            rate: 3,
            reviews: 10,
            id: 6,
        },
    ];

    return (
        <div>
            <PageInfo />
            <PageShop dataFrom={dataFrom} />
        </div>
    );
};

export default PageContainer;
