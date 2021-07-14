import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function HeaderUpper(stateAction) {
  const [state, setState] = useState("en");
  const {t, i18n}   = useTranslation();  
  function handleChange(event) {
    event.preventDefault()
    setState(event.target.value)
  }
  function handleClick(event) {
    i18n.changeLanguage(state);
  }
  useEffect(()=> {
    handleClick()
  }, [state])
  stateAction = state
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
            <ReactBootStrap.NavLink as={Link} to="/Shop">
              {t("Shop.navbar")}
            </ReactBootStrap.NavLink>
            <ReactBootStrap.Nav.Link as={Link} to="/News">
              {t("News.navbar")}
            </ReactBootStrap.Nav.Link>
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
            <ReactBootStrap.NavLink as={Link} to="/SubmitingJurnal">
              {t("submitting an article to the journal.submiting")}
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavDropdown
              title={t("About Us.aboutUs")}
              id="basic-nav-dropdown"
            ></ReactBootStrap.NavDropdown>
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
                defaultValue='EN' 
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
