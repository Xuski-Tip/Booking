import React, {useState} from "react";
import {API, LOGIN, TOKEN_LOCAL} from "../../simpleJs/loginApi";
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
    console.log(props.jurnal);
    console.log(props);

    function me() {
        axios.get(API + "me")
            .then((res) => {
                console.log(res)
            })
    }

    function hello(event, error, values) {
        setOpen(!open);
        console.log(values);
        console.log(event);
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
        // console.log(document.getElementById("user_id").value);
        // console.log(document.getElementById("product_id").value);
        // console.log(document.getElementById("type").value);
    }

    function auto(item) {
        setId(item.id);
        setSend(item.price);
        setOpen(true);
    }

    function navigateToLogin() {
        props.__hitory.push("/Authorization")
    }
    var token = localStorage.getItem(TOKEN_LOCAL);
    var array = token.split(".");
    var obj = JSON.parse(atob(array[1]));
    console.log("token decode " + obj.sub);

    return (
        <div className="Page-shop">
            <div className="Page-slider grid-4-columns" data-item="grid-item">
                {props.jurnal.map((item, index) => {

                    return (
                        <div className="grid-item grid-3-columns" key={item.id}>
                            <div className="product h-100">
                                <div className="product-image">
                                    {localStorage.getItem(TOKEN_LOCAL) ? (
                                        <a
                                            target="_blank"
                                            href={"https://backend-magazine.napaautomotive.uz/storage/" + item.file}
                                            // href={
                                            //   "https://paycom-test.napaautomotive.uz/storage/" +
                                            //   item.file
                                            // }
                                        >
                                            <img
                                                alt="#"
                                                className="h-100"
                                                src={
                                                    "https://backend-magazine.napaautomotive.uz/storage/" +
                                                    item.image
                                                }
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            alt="#"
                                            className="h-100"
                                            src={
                                                "https://backend-magazine.napaautomotive.uz/storage/" +
                                                item.image
                                            }
                                        />
                                    )}

                                    <div className="product-overlay">
                                        {
                                            props.currentPage === 1 ?
                                                <button type="button"
                                                        className="btn btn-primary btn-block"
                                                        onClick={() => (localStorage.getItem(LOGIN) !== "null") ? auto(item):navigateToLogin()                                                        }
                                                >{t("leadershep.send")}</button>
                                                :
                                                <a
                                                    href={
                                                        "https://backend-magazine.napaautomotive.uz/storage/" +
                                                        item.image
                                                    }
                                                >
                                                    {t("jurnale.rasm")}
                                                </a>
                                        }

                                    </div>
                                </div>
                                <div className="product-description">
                                    <div className="product-title">
                                        <p>{getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="">
                <Modal isOpen={open} toggle={() => setOpen(!open)}>
                    <AvForm onSubmit={hello}>
                        <ModalHeader>
                            Jurnalni sotib olishni xohlaysizmi ? <br/>
                            Narxi : {sent}

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
                            <button type="" className="btn btn-danger" onClick={() => setOpen(!open)}>Cansel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

            </div>
        </div>
    );
}
