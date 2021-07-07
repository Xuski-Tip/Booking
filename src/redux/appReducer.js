import {
    GET_MAGAZINE_CARDS,
    SORT_FREE,
    SORT_MINUS,
    SORT_PAID,
    SORT_PLUS,
} from './types';

const initialState = {
    shopMagazine: [
        {
            img: 'https://cdn.fishki.net/upload/post/2017/02/22/2225118/vse-lyudi-goda-s-oblozhki-time-1.jpg',
            hoverImg:
                'https://regnum.ru/uploads/pictures/news/2016/04/22/regnum_picture_1461285953_normal.jpg',
            term: 'Free',
            category: 'Business',
            title: 'The way of Donald Trump',
            price: null,
            rate: 4,
            reviews: 3,
            id: 1,
        },
        {
            img: 'https://theblueprint.ru/upload/14094m/aaad24c47ab65761ea62a2dd3cfc0f72.jpg',
            hoverImg:
                'https://theblueprint.ru/upload/14094m/aaad24c47ab65761ea62a2dd3cfc0f72.jpg',
            term: 'Paid',
            category: 'Fashion',
            title: 'Vogue',
            price: 45.0,
            rate: 5,
            reviews: 10,
            id: 2,
        },
        {
            img: 'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
            hoverImg:
                'https://media.lpgenerator.ru/uploads/2016/03/30/1____.jpg',
            term: 'Free',
            category: 'Woman',
            title: 'Bolt Sweatshirt',
            price: null,
            rate: 4,
            reviews: 3,
            id: 3,
        },
        {
            img: 'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'Paid',
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
            term: 'Free',
            category: 'XZ',
            title: 'Bolt Sweatshirt TTTTT',
            price: null,
            rate: 3,
            reviews: 10,
            id: 5,
        },
        {
            img: 'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            hoverImg:
                'https://static.tildacdn.com/tild3439-3135-4337-b832-613264373833/-Nature-768x1009.jpg',
            term: 'Paid',
            category: 'XZ',
            title: 'Bolt Sweatshirt RRRR',
            price: 305.0,
            rate: 3,
            reviews: 10,
            id: 6,
        },
    ],
    loading: false,
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAGAZINE_CARDS:
            return {
                ...state,
                shopMagazine: state.shopMagazine.concat(action.payload),
            };
        case SORT_PLUS:
            return {
                ...state,
                shopMagazine: state.shopMagazine.sort(
                    (a, b) => +a.price - +b.price
                ),
            };
        case SORT_MINUS:
            return {
                ...state,
                shopMagazine: state.shopMagazine.sort(
                    (a, b) => +b.price - +a.price
                ),
            };
        case SORT_FREE:
            return {
                ...state,
                shopMagazine: state.shopMagazine.sort((a) => a.term !== 'Free'),
            };
        case SORT_PAID:
            return {
                ...state,
                shopMagazine: state.shopMagazine.sort((a) => a.term !== 'Paid'),
            };

        default:
            return state;
    }
};
