import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { AvForm, AvFiled, AvField } from "availity-reactstrap-validation";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import {LANGUAGE} from '../simpleJs/Tipelang';
// import { useTranslation } from "react-i18next";
// import { LANGUAGE } from "../simpleJs/Tipelang";
export default function HeaderUpper(stateAction) {
    const { t, i18n } = useTranslation();

    function handleChange(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE, event.target.value);
        document.location.reload(true);
    }

    let changeLang = localStorage.getItem(LANGUAGE);

    function handleClick() {
        i18n.changeLanguage(changeLang);
    }

    useEffect(handleClick, []);

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

                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.NavLink href="/">
                            {t("Home.navbar")}
                        </ReactBootStrap.NavLink>

                        <ReactBootStrap.NavDropdown title={t("Shop.navbar")}>
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
                                Tahririyatga maqola jo'natish
                            </ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>

                        <ReactBootStrap.Nav.Link as={Link} to="/arcive">
                            {t("Arxiv.arxiv")}
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
                        <div className="p-dropdown">
                            <select
                                style={{ paddingRight: 25, cursor: "pointer", }}
                                onChange={handleChange}
                                defaultValue={changeLang}
                            >
                                <option value="en">ENG</option>
                                <option value="ru">RUS</option>
                                <option value="uz">UZB</option>
                            </select>

                        </div>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

            <Modal isOpen={open1} toggle={showModal1}>
                <AvForm>
                    <ModalBody>
                        <AvField name="name" required label="F.I.SH" type="text" />
                        <AvField name="adres" required label="Adres" type="text" />
                        <AvField name="email" required label="Email" type="text" />
                        <AvField
                            name="number"
                            required
                            label="Telefon nomer"
                            type="number"
                        />
                        <div className="d-flex justify-content-between">
                            <AvField
                                type="select"
                                className="w-75"
                                required
                                name="jurnal"
                                label="Jurnalni tanlang"
                            >
                                <option value="1">2021-yil 1-son</option>
                                <option value="2">2021-yil 2-son</option>
                                <option value="3">2021-yil 3-son</option>
                                <option value="4">2021-yil 4-son</option>

                            </AvField>
                            <AvField
                                name="nusxa"
                                required
                                type="number"
                                label="Necha nusxada"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="button" className="btn btn-success">
                            To'lov
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={showModal1}
                        >
                            Cansel
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={open2} toggle={showModal2}>
                <AvForm onSubmit={buy}>
                    <ModalBody>
                        <AvField name="name" required label="F.I.SH" type="text" />
                        {/*<AvField name="adres" required label="Adres" type="text"/>*/}
                        <AvField name="email" required label="Email" type="text" />
                        <AvField name="number" label="Telefon nomer" type="number" />
                        <div className="">
                            <div className="row">
                                <div className="col-6">
                                    <AvField
                                        type="checkbox"
                                        label="Jurnal1"
                                        className="w-75"
                                        name="jurnal1"
                                    ></AvField>
                                </div>
                                <div className="col-6">
                                    <AvField
                                        type="checkbox"
                                        label="Jurnal2"
                                        className="w-75"
                                        name="jurnal2"
                                    ></AvField>
                                </div>
                                <div className="col-6">
                                    <AvField
                                        type="checkbox"
                                        label="Jurnal3"
                                        className="w-75"
                                        name="jurnal3"
                                    ></AvField>
                                </div>
                                <div className="col-6">
                                    <AvField
                                        type="checkbox"
                                        label="Jurnal4"
                                        className="w-75"
                                        name="jurnal4"
                                    ></AvField>
                                </div>
                            </div>
                            <AvField
                                name="nusxa"
                                required
                                type="number"
                                label="Necha nusxada"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">
                            To'lov
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={showModal2}
                        >
                            Cansel
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={open3} toggle={showModal3}>
                <AvForm>
                    <ModalBody>
                        <div className="row">
                            <div className="col-6">
                                <AvField
                                    type="text"
                                    name="name"
                                    label="Name"
                                    placeholder="Enter your Name"
                                    required
                                    errorMessage="Name kiriting!"
                                />
                            </div>
                            <div className="col-6">
                                <AvField
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="Enter your Email"
                                    errorMessage="Email kiriting!"
                                />
                            </div>
                            <div className="col-6">
                                <AvField
                                    type="text"
                                    name="phone"
                                    label="Phone Number"
                                    placeholder="Enter your Phone Number"
                                    required
                                    errorMessage="Phone Number kiriting!"
                                />
                            </div>
                            <div className="col-6">
                                <AvField
                                    type="file"
                                    name="file"
                                    label="Maqolani pdf varianti"
                                    accept=".pdf, .doc, .docx, .txt"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <AvField
                                    type="textarea"
                                    name="message"
                                    rows="7"
                                    label="Message"
                                    placeholder="Enter your Message"
                                    errorMessage="Message kiriting!"
                                />
                            </div>
                        </div>
                        <button className="btn" type="submit" id="form-submit">
                            <i className="fa fa-paper-plane"></i>
                            &nbsp;Send file
                        </button>
                    </ModalBody>
                </AvForm>
            </Modal>
        </>
    );
}
