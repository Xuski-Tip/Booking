import React, { useEffect, useState } from 'react';
import MapContainer from './MapContainer.js';
import HeaderUpper from '../HeaderUpper.js';
import axios from 'axios';
import { useForm } from 'react-hook-form';
export default function ContactUs() {
    const lang = 'ru';
    const [state, setState] = useState([]);
    useEffect(async () => {
        const res = await axios.get(
            'https://paycom-test.napaautomotive.uz/api/setting'
        );
        setState(res.data.setting);
    }, []);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="body-inner">
            <HeaderUpper />
            <section className="no-padding">
                <div className="map">
                    <MapContainer />
                </div>
                {state.map((element) => {
                    return (
                        <div
                            key={element.id}
                            className=""
                            style={{
                                position: 'absolute',
                                left: 20,
                                top: 50,
                                zIndex: 6000,
                                backgroundColor: '#bebec4',
                                borderRadius: 5,
                                display: 'grid',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'black',
                            }}
                        >
                            <div className="wrapcontact">
                                <div className="adressdflex">
                                    <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                    <span>
                                        {lang == 'en'
                                            ? element.address_uz
                                            : element.address_ru}
                                    </span>
                                    {/* <span>{element.address_ru}</span> */}
                                </div>
                                <br />
                                <div className="adressdflex" title="Phone">
                                    <i
                                        className="fa fa-phone"
                                        aria-hidden="true"
                                    ></i>
                                    &nbsp;{' '}
                                    <a
                                        style={{ color: 'black' }}
                                        href={`tel:${element.phone}`}
                                    >
                                        {element.phone}
                                    </a>
                                </div>
                                <br />
                                <div className="adressdflex">
                                    <i
                                        className="fa fa-envelope"
                                        aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                    <a
                                        style={{ color: 'black' }}
                                        href={`mailto:${element.email}`}
                                    >
                                        {element.email}
                                    </a>
                                </div>
                                <br />
                                <div className="adressdflex">
                                    <i
                                        className="fa fa-clock"
                                        aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                    {element.work_day}
                                </div>
                            </div>
                            <div className="social-icons  social-icons-colored adressdflex wrapcontact">
                                <ul>
                                    <li className="social-facebook">
                                        <a href={element.facebook}>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="social-twitter">
                                        <a href={element.instagram}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="social-google">
                                        <a href={element.telegram}>
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="social-vimeo">
                                        <a href={element.youtube}>
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section>
                <div className="container">
                    <div
                        className="row"
                        style={{
                            justifyContent: 'center',
                        }}
                    >
                        <div className="col-lg-7">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="widget-contact-form"
                            >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
                                        <input
                                            {...register('name')}
                                            type="text"
                                            name="name"
                                            className="form-control required name"
                                            placeholder="Enter your Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            name="email"
                                            className="form-control required email"
                                            placeholder="Enter your Email"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Your Number</label>
                                        <input
                                            {...register('phone')}
                                            type="tel"
                                            name="phone"
                                            className="form-control required"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        {...register('message')}
                                        type="text"
                                        name="message"
                                        rows="5"
                                        className="form-control required"
                                        placeholder="Enter your Message"
                                    ></textarea>
                                </div>

                                <button
                                    className="btn"
                                    type="submit"
                                    id="form-submit"
                                >
                                    <i className="fa fa-paper-plane"></i>
                                    &nbsp;Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
