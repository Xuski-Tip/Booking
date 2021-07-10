import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "i18next";
export default function HeaderUpper() {
  const [state, setState] = useState("en");
  const { t, i18n } = useTranslation();
  function handleChange(event) {
    event.preventDefault();
    setState(event.target.value);
  }
  function handleClick() {
    i18n.changeLanguage(state);
  }
  useEffect(() => {
    handleClick();
  }, [state]);

  console.log(state);
  return (
    <>
      <ReactBootStrap.Navbar sticky="top" bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand as={Link} to="/">
          <strong>{t("Offical Site.navbar")}</strong>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavLink href="/">
              {t("Home.navbar")}
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavLink as={Link} to="/Shop">
              {t("Shop.navbar")}
            </ReactBootStrap.NavLink>
            <ReactBootStrap.Nav.Link as={Link} to="/Authorization">
              {t("avtorizatsiya.navbar")}
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/ContactUs">
              {t("Countact Us.navbar")}
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/News">
              {t("News.navbar")}
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title={t('Our staff.staff')}
              id="basic-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/editor">
                {t('Our staff.Editor')}
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item as={Link} to="/staff/members">
                {t('Our staff.lives')}
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavLink as={Link} to="/SubmitingJurnal">
              {t("submitting an article to the journal.submiting")}
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavDropdown
              title={t('About Us.aboutUs')}
              id="basic-nav-dropdown"
            ></ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline>
            <div className="p-dropdown">
              <select
                style={{ paddingRight: 25, cursor: "pointer" }}
                value={state}
                onChange={(e) => handleChange(e)}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>
  );
}
