import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../simpleJs/Tipelang";
import axios from "axios";
import { API } from "../simpleJs/loginApi";
import { toast } from "react-toastify";
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

  const [jurnal8, setJurnal8] = useState([]);
  useEffect(() => {
    axios.get(API + "magazine").then((res) => {
      console.log("aslom");
      setJurnal8(res.data.magazine.splice(-8, 8));
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
            <AvField name="manzil" required label="Manzil" type="text" />
            <AvField name="email" required label="E-mail" type="text" />
            <AvField
              name="number"
              required
              label="Telefon nomer"
              type="number"
            />
            <div className="row">
              {jurnal8.map((item, index) => {
                return (
                  <div key={item.id} className="col-6">
                    <AvField
                      type="checkbox"
                      label={item.title_uz}
                      className=""
                      name={"jurnal" + index}
                    ></AvField>
                  </div>
                );
              })}
              <div className="col-12">
                <AvField
                  name="nusxa"
                  required
                  type="number"
                  label="Necha nusxada"
                />
              </div>
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
              Orqaga
            </button>
          </ModalFooter>
        </AvForm>
      </Modal>

      <Modal isOpen={open2} toggle={showModal2}>
        <AvForm onSubmit={buy}>
          <ModalBody>
            <AvField name="name" required label="F.I.SH" type="text" />
            {/*<AvField name="adres" required label="Adres" type="text"/>*/}
            <AvField name="email" required label="E-mail" type="text" />
            <AvField name="number" label="Telefon nomer" type="number" />
            <div className="">
              <div className="row">
                {jurnal8.map((item, index) => {
                  return (
                    <div key={item.id} className="col-6">
                      <AvField
                        type="checkbox"
                        label={item.title_uz}
                        className=""
                        name={"jurnal" + index}
                      ></AvField>
                    </div>
                  );
                })}
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
              Orqaga
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
                  label="Ism"
                  placeholder="Ismingizni kiriting"
                  required
                  errorMessage="Name kiriting!"
                />
              </div>
              <div className="col-6">
                <AvField
                  type="email"
                  name="email"
                  label="E-mail"
                  placeholder="E-mailni kiriting"
                  errorMessage="Email kiriting!"
                />
              </div>
              <div className="col-6">
                <AvField
                  type="text"
                  name="phone"
                  label="Telefon nomer"
                  placeholder="Nomeringizni kiriting"
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
                  name="text"
                  rows="7"
                  label="Maqola"
                  placeholder="Maqolaga qo'shimcha"
                  errorMessage="Xabar kiriting!"
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-paper-plane"></i>
              &nbsp;Fayl yuborish
            </button>
          </ModalBody>
        </AvForm>
      </Modal>
    </>
  );
}
