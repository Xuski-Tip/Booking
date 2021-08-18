import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LANGUAGE} from "../simpleJs/Tipelang";
import axios from "axios";
import {API, LOGIN} from "../simpleJs/loginApi";
import {toast} from "react-toastify";
import {getLanguage} from "../simpleJs/locale";

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default function HeaderUpper(stateAction) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [lastClicked, setLastClicked] = useState(null);

    const {t, i18n} = useTranslation();
    const [obuna, setObuna] = useState();
    const [id, setId] = useState();

    function handleChange(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE, event.target.value);
        document.location.reload(true);
    }

    let changeLang = localStorage.getItem(LANGUAGE);

    function handleClick() {
        i18n.changeLanguage(changeLang);
    }

    const [jurnal8, setJurnal8] = useState([]);
    const headers = {
        'Authorization': localStorage.getItem(LOGIN)
    };
    useEffect(() => {
        axios.get(API + "magazine").then((res) => {
            // setJurnal8(res.data.magazine.splice(0, 4));
        });
        axios.get(API + "subscription", {headers: headers})
            .then((res2) => {
                console.log(res2);
                setId(res2.data.subscription[res2.data.subscription.length - 1].id);
                setObuna(res2.data.subscription);
            });
        handleClick();
    }, []);

    const addJurnal = (event, error, values) => {
        axios.post(API + "article/store", values).then((res) => {
            toast.success("Maqola qo'shildi");
            setOpen3(false);
        });
    };

    const [open, setOpen] = useState();
    const [open0, setOpen0] = useState();
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);



    function auto() {
        setOpen(true);
        setOpen1(false);
        setOpen0(false);
    }

    function navigateToLogin() {
        console.log(stateAction.his);
        if (stateAction.his){
            stateAction.his.push("/authorization")
        }
    }
    var token = localStorage.getItem(LOGIN);
    var array = (token) ? token.split(".") : "";
    var obj = array? JSON.parse(atob(array[1])) : "";


    const showModal1 = () => {
        setOpen1(!open1);
        // axios.get(API + "subscription", {headers: headers})
        //     .then((res2) => {
        //         console.log(res2);
        //         setObuna(res2.data.subscription.splice(0, 1))
        //     })
    };

    const showModal2 = () => {
        setOpen2(!open2);
    };
    const showModal3 = () => {
        setOpen3(!open3);
    };

    function subscribe(event, error, values) {
        console.log(values);
        if(values.name?.length > 0 && values.email?.length > 0 && values.number?.length > 0){
            (localStorage.getItem(LOGIN) !== "") ? auto() : navigateToLogin()
        }
        else {
            toast.error("Malumotlarni to'ldiring !!!")
        }
    }

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
        <>
            <ReactBootStrap.Navbar sticky="top" bg="light" expand="lg">
                {/* <ReactBootStrap.Navbar.Brand as={Link} to="/">
          <strong>{t("Offical Site.navbar")}</strong>
        </ReactBootStrap.Navbar.Brand> */}

                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.NavLink href="/">
                            {t("Home.navbar")}
                        </ReactBootStrap.NavLink>

                        <ReactBootStrap.NavDropdown title={t("Shop.navbar")}>
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/jurnal">
                                {t("jurnale.text")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/letsenziya">
                                {t("Shop.litsenziya")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/leadership">
                                {t("Shop.leadership")}
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>

                        <ReactBootStrap.NavDropdown
                            title={t("Our staff.staff")}
                            id="basic-nav-dropdown"
                        >
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/editor">
                                {t("Our staff.Editor")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/members">
                                {t("Our staff.lives")}
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>

                        <ReactBootStrap.NavDropdown
                            title={t("submitting an article to the journal.submiting")}
                            id="basic-nav-dropdown"
                        >
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/requirimend">
                                {t("submitting an article to the journal.article")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item as={Link} to="/layout">
                                {t("submitting an article to the journal.mode")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item onClick={showModal3}>
                                {t("submitting an article to the journal.editorial")}
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>

                        <ReactBootStrap.Nav.Link as={Link} to="/arcive">
                            {t("Arxiv.arxiv")}
                        </ReactBootStrap.Nav.Link>

                        <ReactBootStrap.Nav.Link as={Link} to="/maqola">
                            {t("News.maqola")}
                        </ReactBootStrap.Nav.Link>

                        <ReactBootStrap.NavDropdown
                            title={t("Subscription.obuna")}
                            id="basic-nav-dropdown"
                        >
                            <ReactBootStrap.NavDropdown.Item onClick={showModal1}>
                                {t("Subscription.ofline")}
                            </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item onClick={showModal2}>
                                {t("Subscription.online")}
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Form inline>

                        <Link className="Link-autho" to={"/profile"}>
                            <img src="/images/about/user.png" alt="Error" className="rounded-circle" width="30px" height="30px"/>
                        </Link>{" "}

                        <Link className="Link-autho" to={"/Authorization"}>
                            {t("avtorizatsiya.navbar")}
                        </Link>{" "}

                        <Link className="Link-registr" to={"/Authorization/Registration"}>
                            {t("avtorizatsiya.navbar2")}
                        </Link>
                        <div className="p-dropdown ml-3">
                            <select
                                // style={{ paddingRight: 25, cursor: "pointer", }}
                                onChange={handleChange}
                                defaultValue={changeLang}
                                className="options"
                            >
                                <option value="uz">
                                  {/*<img alt="#" src="/flag/uz.png" className="flag"/>*/}
                                  O'zbekcha</option>
                                <option value="krill">Ўзбекча</option>
                                <option value="en">English</option>
                                <option value="ru">Русcкий</option>
                            </select>

                        </div>


                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

            <Modal isOpen={open1} toggle={showModal1}>
                <AvForm onSubmit={subscribe}>
                    <ModalBody>
                        <AvField name="name" required label={t("send file.nameLabel")} type="text"/>
                        <AvField name="manzil" required label={t("connect.manzil")} type="text"/>
                        <AvField name="email" required label={t("registr.email")} type="text"/>
                        <AvField
                            name="number"
                            required
                            label={t("send file.phonePlaceholder")}
                            type="phone"
                        />
                        <div className="row">

                            {
                                obuna?.map((item, index) => {
                                    return(
                                        <div key={item.id} className="col-12 my-3">
                                            <h6 className="text-dark">{item.name + " yil"}</h6>
                                            <p className="text-dark">{t("subscribe.money")}: {" "} {item.price} {" "} {t("subscribe.sum")}</p>
                                        </div>
                                    )
                                })
                            }


                            {/*<div className="col-12">*/}
                            {/*    <AvField*/}
                            {/*        name="nusxa"*/}
                            {/*        required*/}
                            {/*        type="number"*/}
                            {/*        label={t("connect.nusxa")}*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">
                            {t("send message.tulov")}
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={showModal1}
                        >
                            {t("registr.cansel")}
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={open} toggle={() => setOpen(!open)}>
                <AvForm onSubmit={hello}>
                    <ModalHeader>
                        {t("subscribe.ofline")} <br/>

                        {/*<ModalBody>*/}
                        <div className="d-none">
                            <AvField name="user_id" value={obj.sub} type="text" label="user_id"/>
                            <AvField name="product_id" value={id} type="text" label="product_id"/>
                            <AvField name="type" value="subscription" type="text" label="Magazine"/>
                        </div>
                        {/*</ModalBody>*/}
                    </ModalHeader>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">{t("leadershep.send")}</button>
                        <button type="button" className="btn btn-danger" onClick={() => setOpen(false)}>{t("registr.cansel")}</button>
                    </ModalFooter>
                </AvForm>
            </Modal>



            <Modal isOpen={open2} toggle={showModal2}>
                <AvForm onSubmit={subscribe}>
                    <ModalBody>
                        <AvField name="name" required label={t("send file.nameLabel")} type="text"/>
                        {/*<AvField name="adres" required label="Adres" type="text"/>*/}
                        <AvField name="email" required label={t("registr.email")} type="text"/>
                        <AvField name="number" label={t("send file.phonePlaceholder")} type="phone"/>
                        <div className="">
                            <div className="row">
                                {
                                    obuna?.map((item, index) => {
                                        return(
                                            <div key={item.id} className="col-12 my-3">
                                                <h6 className="text-dark">{item.name + " yil"}</h6>
                                                <p className="text-dark">{t("subscribe.money")}: {" "} {item.price} {" "} {t("subscribe.sum")}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/*<AvField*/}
                            {/*    name="nusxa"*/}
                            {/*    required*/}
                            {/*    type="number"*/}
                            {/*    label={t("connect.nusxa")}*/}
                            {/*/>*/}
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">
                            {t("send message.tulov")}
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={showModal2}
                        >
                            {t("registr.cansel")}
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={open0} toggle={() => setOpen0(!open0)}>
                <AvForm onSubmit={hello}>
                    <ModalHeader>
                        {t("subscribe.ofline")} <br/>

                        {/*<ModalBody>*/}
                        <div className="">
                            <AvField name="user_id" value={obj.sub} type="text" label="user_id"/>
                            <AvField name="product_id" value={id} type="text" label="product_id"/>
                            <AvField name="type" value="subscription" type="text" label="Magazine"/>
                        </div>
                        {/*</ModalBody>*/}
                    </ModalHeader>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">{t("leadershep.send")}</button>
                        <button type="button" className="btn btn-danger" onClick={() => setOpen0(false)}>{t("registr.cansel")}</button>
                    </ModalFooter>
                </AvForm>
            </Modal>


            <Modal isOpen={open3} toggle={showModal3}>
                <AvForm onSubmit={addJurnal}>
                    <ModalBody>
                        <div className="row">
                            <div className="col-12 ">
                                <AvField
                                    type="text"
                                    name="name"
                                    label={t("send file.nameLabel")}
                                    placeholder={t("send file.namePlaceholder")}
                                    required
                                    errorMessage={t("send file.nameErrorMessage")}
                                />
                            </div>
                            <div className="col-12 ">
                                <AvField
                                    type="email"
                                    name="email"
                                    label={t("send file.emailLabel")}
                                    placeholder={t("send file.emailPlaceholder")}
                                    required
                                    errorMessage={t("send file.emailErrorMessage")}
                                />
                            </div>
                            <div className="col-12 ">
                                <AvField
                                    type="text"
                                    name="phone"
                                    label={t("send file.phoneLabel")}
                                    placeholder={t("send file.phonePlaceholder")}
                                    required
                                    errorMessage={t("send file.phoneErrorMessage")}
                                />
                            </div>
                            <div className="col-12">
                                <AvField
                                    type="file"
                                    name="file"
                                    label={t("send file.fileLabel")}
                                    accept=".pdf, .doc, .docx, .txt"
                                    required
                                    errorMessage={t("send file.fileErrorMessage")}
                                />
                            </div>
                            <div className="col-12">
                                <AvField
                                    type="textarea"
                                    name="text"
                                    rows="7"
                                    label={t("send file.textLabel")}
                                    placeholder={t("send file.textPlaceholder")}
                                    errorMessage={t("send file.textErrorMessage")}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            <i className="fa fa-paper-plane"></i>
                            &nbsp;{t("send file.buttonText")}
                        </button>
                    </ModalBody>
                </AvForm>
            </Modal>
        </>
    );
}