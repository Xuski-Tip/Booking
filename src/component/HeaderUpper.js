import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LANGUAGE} from "../simpleJs/Tipelang";
import axios from "axios";
import {API} from "../simpleJs/loginApi";
import {toast} from "react-toastify";
import {getLanguage} from "../simpleJs/locale";

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default function HeaderUpper(stateAction) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [lastClicked, setLastClicked] = useState(null);

    const {t, i18n} = useTranslation();

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
    useEffect(() => {
        axios.get(API + "magazine").then((res) => {
            console.log("aslom");
            setJurnal8(res.data.magazine.splice(0, 8));
            // console.log(res)
        });
    }, []);
    useEffect(handleClick, []);

    const addJurnal = (event, error, values) => {
        axios.post(API + "article/store", values).then((res) => {
            console.log(res);
            toast.success("Maqola qo'shildi");
            setOpen3(false);
        });
    };

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [array] = useState([]);
    const showModal1 = () => {
        setOpen1(!open1);
    };

    const showModal2 = () => {
        setOpen2(!open2);
    };
    const showModal3 = () => {
        setOpen3(!open3);
    };
    const buy = (event, error, values) => {
        array.push(values.jurnal1);
        array.push(values.jurnal2);
        array.push(values.jurnal3);
        array.push(values.jurnal4);
        console.log("array");
        console.log(array);
        let k = 0;
        let soni = values.nusxa;

        for (let number of array) {
            if (number === true) k++;
        }
        let summ = k * soni * 25000;
        console.log(summ);
    };

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
                        <Link className="Link-autho" to={"/Authorization"}>
                            {t("avtorizatsiya.navbar")}
                        </Link>{" "}
                        /
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
                <AvForm>
                    <ModalBody>
                        <AvField name="name" required label={t("send file.nameLabel")} type="text"/>
                        <AvField name="manzil" required label={t("connect.manzil")} type="text"/>
                        <AvField name="email" required label={t("registr.email")} type="text"/>
                        <AvField
                            name="number"
                            required
                            label={t("send file.phonePlaceholder")}
                            type="number"
                        />
                        <div className="row">
                            {jurnal8.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-6">
                                        <AvField
                                            type="checkbox"
                                            label={getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : item.title_en}
                                            className=""
                                            name={"jurnal" + index}
                                        />
                                    </div>
                                );
                            })}
                            <div className="col-12">
                                <AvField
                                    name="nusxa"
                                    required
                                    type="number"
                                    label={t("connect.nusxa")}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="button" className="btn btn-success">
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

            <Modal isOpen={open2} toggle={showModal2}>
                <AvForm onSubmit={buy}>
                    <ModalBody>
                        <AvField name="name" required label={t("send file.nameLabel")} type="text"/>
                        {/*<AvField name="adres" required label="Adres" type="text"/>*/}
                        <AvField name="email" required label={t("registr.email")} type="text"/>
                        <AvField name="number" label={t("send file.phonePlaceholder")} type="number"/>
                        <div className="">
                            <div className="row">
                                {jurnal8.map((item, index) => {
                                    return (
                                        <div key={item.id} className="col-6">
                                            <AvField
                                                type="checkbox"
                                                label={getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : item.title_en}
                                                className=""
                                                name={"jurnal" + index}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <AvField
                                name="nusxa"
                                required
                                type="number"
                                label={t("connect.nusxa")}
                            />
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

            <Modal isOpen={open3} toggle={showModal3}>
                <AvForm onSubmit={addJurnal}>
                    <ModalBody>
                        <div className="row">
                            <div className="col-6">
                                <AvField
                                    type="text"
                                    name="name"
                                    label={t("send file.nameLabel")}
                                    placeholder={t("send file.namePlaceholder")}
                                    required
                                    errorMessage={t("send file.nameErrorMessage")}
                                />
                            </div>
                            <div className="col-6">
                                <AvField
                                    type="email"
                                    name="email"
                                    label={t("send file.emailLabel")}
                                    placeholder={t("send file.emailPlaceholder")}
                                    required
                                    errorMessage={t("send file.emailErrorMessage")}
                                />
                            </div>
                            <div className="col-6">
                                <AvField
                                    type="text"
                                    name="phone"
                                    label={t("send file.phoneLabel")}
                                    placeholder={t("send file.phonePlaceholder")}
                                    required
                                    errorMessage={t("send file.phoneErrorMessage")}
                                />
                            </div>
                            <div className="col-6">
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
