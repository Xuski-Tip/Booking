import React from 'react';
const clientData = [
    {
        img: '/images/1Client.jpg',
        subtitle: 'Alea Smith',
        title: 'Software Developer',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
        emal: 'https://mail.google.com/mail/',
    },
    {
        img: '/images/1Client.jpg',
        subtitle: 'Alea Smith',
        title: 'Software Developer',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
        emal: 'https://mail.google.com/mail/',
    },
    {
        img: '/images/1Client.jpg',
        subtitle: 'Alea Smith',
        title: 'Software Developer',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
        emal: 'https://mail.google.com/mail/',
    },
    {
        img: '/images/1Client.jpg',
        subtitle: 'Alea Smith',
        title: 'Software Developer',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
        emal: 'https://mail.google.com/mail/',
    },
];
export default function MainClient() {
    return (
        <section className="background-grey MainClient">
            <div className="container">
                <div className="heading-text heading-section text-center">
                    <h2>MEET OUR TEAM</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consecte adipiscing elit.
                        Suspendisse condimentum porttitor cursumus.
                    </p>
                </div>
                <div className="Team__card">
                    {clientData.map((element) => {
                        return (
                            <div className="team__members" key={element.id}>
                                <div className="team__member">
                                    <img
                                        alt="#"
                                        src="/images/1Client.jpg"
                                        className="team__member-vesual"
                                    ></img>
                                </div>
                                <div className="team__info">
                                    <h3 className="team__info-subtitle">
                                        {element.subtitle}
                                    </h3>
                                    <span className="team__info-developer">
                                        {element.title}
                                    </span>
                                    <p className="team__info-lorem">
                                        {element.description}
                                    </p>
                                    <div className="align-center">
                                        <a
                                            className="btn btn-xs btn-slide btn-light"
                                            target="_blank"
                                            href={element.facebook}
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                            <span>Facebook</span>
                                        </a>
                                        <a
                                            className="btn btn-xs btn-slide btn-light"
                                            target="_blank"
                                            href={element.twitter}
                                            data-width="100"
                                        >
                                            <i className="fab fa-twitter"></i>
                                            <span>Twitter</span>
                                        </a>
                                        <a
                                            className="btn btn-xs btn-slide btn-light"
                                            target="_blank"
                                            href={element.instagram}
                                            data-width="118"
                                        >
                                            <i className="fab fa-instagram"></i>
                                            <span>Instagram</span>
                                        </a>
                                        <a
                                            className="btn btn-xs btn-slide btn-light"
                                            target="_blank"
                                            href={element.emal}
                                            data-width="80"
                                        >
                                            <i className="icon-mail"></i>
                                            <span>Mail</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
