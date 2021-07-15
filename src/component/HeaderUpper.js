import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {LANGUAGE} from "../redux/languageType";
import {getLang} from "./lang";
export default function HeaderUpper(stateAction) {
  const {t, i18n}   = useTranslation();  
  function handleChange(event) {
    event.preventDefault();
    localStorage.setItem(LANGUAGE, event.target.value);
    document.location.reload(true)
  }

  let changeLang = localStorage.getItem(LANGUAGE);

  function handleClick() {
    i18n.changeLanguage(changeLang);
  }
  useEffect(()=> {
    handleClick()
  },[]);
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
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/editor">
                {t("Shop.litsenziya")}
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/editor">
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

            <ReactBootStrap.NavDropdown title={t("submitting an article to the journal.submiting")} id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/editor">
                {t("submitting an article to the journal.article")}
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/members">
                {t("submitting an article to the journal.mode")}
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.Nav.Link as={Link} to="/arcive">
              {t("Arxiv.arxiv")}
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link as={Link} to="/subscribe">
              {t("Subscription.obuna")}
            </ReactBootStrap.Nav.Link>

          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline>
            <Link className='Link-autho' to={"/Authorization"}>{t("avtorizatsiya.navbar")}</Link> / 
            <Link className='Link-registr' to={"/Authorization/Registration"}>
              {t("avtorizatsiya.navbar2")}
            </Link>
            <div className="p-dropdown">
              <select
                style={{ paddingRight: 25, cursor: "pointer" }}
                onChange={handleChange}
                defaultValue={changeLang}
              >
                <option value='en'>ENG</option>
                <option value='ru'>RUS</option>
                <option value='uz'>UZB</option>
              </select>
            </div>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>
  );
}
