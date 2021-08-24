import React, {useState} from "react";
import {API, API_PATH, LOGIN} from "../../simpleJs/loginApi";
import {getLanguage} from "../../simpleJs/locale";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {AvForm, AvField} from "availity-reactstrap-validation"
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {toast} from "react-toastify";

// ! Wate to backend

export default function PageShop(props) {

    const {t} = useTranslation();
    const [id, setId] = useState("");
    const [sent, setSend] = useState("");
    const [open, setOpen] = useState(false);

    function hello(event, error, values) {
        setOpen(!open);
        const headers = {
            'Authorization': localStorage.getItem(LOGIN)
        };
        axios.post(API + "magazinebuy", values, {
            headers: headers
        })
            .then((res) => {
                if (res.data.status === "success") {
                    window.open(res.data.checkout_url, '_blank');
                } else if (res.data.status === "Token is Expired" || res.data.status === "Authorization Token not found") {
                    navigateToLogin();
                    toast.warning(res.data.status);
                }
            })
    }

    function auto(item) {
        setId(item.id);
        setSend(item.price);
        setOpen(true);
    }

    function navigateToLogin() {
        props.__hitory.push("/Authorization")
    }

    var token = localStorage.getItem(LOGIN);
    var array = (token) ? token.split(".") : "";
    var obj = array ? JSON.parse(atob(array[1])) : "";

    var array = (token) ? token.split(".") : "";
    var obj = array ? JSON.parse(atob(array[1])) : "";
    return (
        <div className="Page-shop">
            <div className="container">
                <div className="row">
                    <div className="Page-slider grid-4-columns mb-4" data-item="grid-item">
                        {props.jurnal.map((item, index) => {

                            return (
                                <div className="col-8 offset-sm-0 offset-2 col-sm-6 col-md-4 col-xl-3 grid-item arxivCol mt-4" key={item.id}>
                                    <div className="product h-100">
                                        <div className="product-image">
                                            {localStorage.getItem(LOGIN) ? (
                                                <a
                                                    target="_blank"
                                                    href={API_PATH + "storage/" + item.file}
                                                    // href={
                                                    //   "https://paycom-test.napaautomotive.uz/storage/" +
                                                    //   item.file
                                                    // }
                                                >
                                                    <img
                                                        alt="#"
                                                        className="portfolio-img mt-3"
                                                        src={
                                                            API_PATH + "storage/" +
                                                            item.image
                                                        }
                                                    />
                                                </a>
                                            ) : (
                                                <img
                                                    alt="#"
                                                    className="portfolio-img mt-3"
                                                    src={
                                                        API_PATH + "storage/" +
                                                        item.image
                                                    }
                                                />
                                            )}

                                            <div className="product-overlay">
                                                {
                                                    props.currentPage === 1 ?
                                                        <button type="button"
                                                                className="btnArxiv0"
                                                                onClick={() => (localStorage.getItem(LOGIN) !== "") ? auto(item) : navigateToLogin()}
                                                        >{t("leadershep.send")}</button>
                                                        :
                                                        <a
                                                            href={
                                                                API_PATH + "storage/" +
                                                                item.image
                                                            }
                                                            className="btnArxiv01 w-100"
                                                        >
                                                            {t("jurnale.rasm")}
                                                        </a>
                                                }
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <div className="product-title">
                                                <p className="marginleft">{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            <div className="">
                <Modal isOpen={open} toggle={() => setOpen(!open)}>
                    <AvForm onSubmit={hello}>
                        <ModalHeader>
                            {t("subscribe.buy")} <br/>
                            {t("subscribe.money")} : {sent} {" "} {t("subscribe.sum")} <br/>

                            {/*<ModalBody>*/}
                            <div className="d-none">
                                <AvField name="user_id" value={obj.sub} type="text" label="user_id"/>
                                <AvField name="product_id" value={id} type="text" label="product_id"/>
                                <AvField name="type" value="magazine" type="text" label="Magazine"/>
                            </div>
                            {/*</ModalBody>*/}
                        </ModalHeader>
                        <ModalFooter className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">{t("leadershep.send")}</button>
                            <button type="button" className="btn btn-danger"
                                    onClick={() => setOpen(!open)}>{t("registr.cansel")}</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

            </div>
        </div>
    );
}
