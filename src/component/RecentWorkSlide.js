import React, {useEffect, useState} from "react";
import axios from "axios";
import {API, LOGIN} from "../simpleJs/loginApi";
import {getLanguage} from "../simpleJs/locale";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Modal, ModalFooter, ModalHeader} from "reactstrap";
import {toast} from "react-toastify";


const RecentWorkSlide = (props) => {

    const {t} = useTranslation();
    const [jurnal12, setJurnal12] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [sent, setSend] = useState("");
    const [name, setName] = useState("");


    function auto(item) {
        setId(item.id);
        setSend(item.price);
        setName(getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril);
        setOpen(true);
    }

    function navigateToLogin() {
        props.his.push("/Authorization")
    }
    var token = localStorage.getItem(LOGIN);
    var array = (token.length > 0) ? token.split(".") : props.his.push("/Authorization");
    var obj = JSON.parse(array ? atob(array[1]) : "");


    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                setJurnal12(res.data.magazine.splice(0, 8));
            })
    }, []);


    //     BUY      //
    function hello(event, error, values) {
        setOpen(!open);
        const headers = {
            'Authorization': localStorage.getItem(LOGIN)
        };
        axios.post(API + "magazinebuy", values, {
            headers: headers
        })
            .then((res) => {
                if(res.data.status === "success"){
                    window.open(res.data.checkout_url, '_blank');
                } else if(res.data.status === "Token is Expired" || res.data.status === "Authorization Token not found"){
                    navigateToLogin();
                    toast.warning(res.data.status);
                }
            })
    }


    return (
        <div className="portfolio">
            <div id="portfolio" className="portfolio-4-columns m-auto" data-margin="0">
                {jurnal12.map((item) => {
                    return (
                        <div className="" key={item.id}>
                                <div
                                    className="portfolio-item"
                                    key={item.id}
                                >
                                    <div className="portfolio-item-wrap">
                                        <div className="portfolio-image position-relative">
                                            <a target="_blank" href={
                                                "https://backend-magazine.napaautomotive.uz/storage/" + item.file
                                            }>
                                                <img
                                                    className="portfolio-img"
                                                    src={"https://backend-magazine.napaautomotive.uz/storage/" + item.image}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <h6 className="mt-2 marginleft">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril}</h6>
                                        <div className="portfolio-description">
                                            <a
                                                title="Paper Pouch!"
                                                data-lightbox="image"
                                                href={"https://backend-magazine.napaautomotive.uz/storage/" + item.image}
                                            />
                                        </div>
                                        <div className="product-overlay">
                                            <button type="button" className="btn btn-primary btn-block"
                                            onClick={() => (localStorage.getItem(LOGIN) !== "") ? auto(item):navigateToLogin()}
                                            >{t("leadershep.send")}</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    );
                })};
            </div>
            <Link to="/arcive">
                <h5 className="text-right mr-4 text-primary">{t("malumot.malumot2")} ...</h5>
            </Link>

            <Modal isOpen={open} toggle={() => setOpen(!open)}>
                <AvForm onSubmit={hello}>
                    <ModalHeader>
                        Jurnalni sotib olishni xohlaysizmi ? <br/>
                        Narxi : {sent} <br/>
                        Nomi: {name}

                        {/*<ModalBody>*/}
                        <div className="d-none">
                            <AvField name="user_id" value={obj.sub} type="text" label="user_id"/>
                            <AvField name="product_id" value={id} type="text" label="product_id"/>
                            <AvField name="type" value="magazine" type="text" label="Magazine"/>
                        </div>
                        {/*</ModalBody>*/}
                    </ModalHeader>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Sotib olish</button>
                        <button type="button" className="btn btn-danger" onClick={() => setOpen(false)}>Cansel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>

        </div>
    );
};
export default RecentWorkSlide;