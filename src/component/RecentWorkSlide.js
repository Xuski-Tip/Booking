import React from 'react';
const recentData = [
    {
        img: '../images/One.jpg',
        id: 1,
    },
    {
        img: '../images/Two.jpg',
        id: 2,
    },
    {
        img: '../images/Three.jpg',
        id: 3,
    },
    {
        img: '../images/Four.jpg',
        id: 4,
    },
    {
        img: '../images/Five.jpg',
        id: 5,
    },
    {
        img: '../images/Three.jpg',
        id: 6,
    },

    {
        img: '../images/Two.jpg',
        id: 7,
    },
    {
        img: '../images/Five.jpg',
        id: 8,
    },
];
class RecentWorkSlide extends React.Component {
    render() {
        return (
            <div className="Recent-Works">
                {recentData.map((element) => {
                    return (
                        <div className="Recent-Works__content" key={element.id}>
                            <img
                                alt="#"
                                className="Recent-Works__content-img"
                                src={element.img}
                            ></img>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default RecentWorkSlide;
