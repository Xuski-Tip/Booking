import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'i18next';
export default function HeaderUpper() {
<<<<<<< HEAD
  const [state, setState] = useState("en");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState([]); // данные берутся из select и готовы к отправке на Backend
  const { t, i18n } = useTranslation();
  useEffect(() => {
    axios
      .get(`https://paycom-test.napaautomotive.uz/api/category`)
      .then((res) => {
        const data = res.data;
        setCategory(data.category);
      });
    console.log(category);
  }, []);
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
        <ReactBootStrap.Navbar.Brand href="#home">
          <Link to="/home">
            <strong>{t('Offical Site.navbar')}</strong>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            {category.map((element) => {
              return (
                <ReactBootStrap.NavLink
                  key={element.id}
                  href={element.name_en.replace(/\s+/g, "")}
                  as={Link}
                  to={element.name_en.replace(/\s+/g, "")}
                >
                  {element.name_en}
                </ReactBootStrap.NavLink>
              );
            })}
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
              {t('News.navbar')}
            </ReactBootStrap.Nav.Link>
            {/* <ReactBootStrap.NavDropdown title="Shop" id="basic-nav-dropdown">
=======
    const [state, setState] = useState('en');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState([]); // данные берутся из select и готовы к отправке на Backend
    const { t, i18n } = useTranslation();
    useEffect(() => {
        axios
            .get(`https://paycom-test.napaautomotive.uz/api/category`)
            .then((res) => {
                const data = res.data;
                setCategory(data.category);
            });
        console.log(category);
    }, []);
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
                <ReactBootStrap.Navbar.Brand href="#home">
                    <Link to="/home">
                        <strong>Offical Site</strong>
                    </Link>
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        {category.map((element) => {
                            return (
                                <ReactBootStrap.NavLink
                                    key={element.id}
                                    href={element.name_en.replace(/\s+/g, '')}
                                    as={Link}
                                    to={element.name_en.replace(/\s+/g, '')}
                                >
                                    {element.name_en}
                                </ReactBootStrap.NavLink>
                            );
                        })}
                        <ReactBootStrap.NavLink href="/">
                            Home
                        </ReactBootStrap.NavLink>
                        <ReactBootStrap.NavLink as={Link} to="/Shop">
                            Shop
                        </ReactBootStrap.NavLink>
                        <ReactBootStrap.Nav.Link as={Link} to="/Authorization">
                            Log in
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/ContactUs">
                            <p>{t('Thanks.1')}</p>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/News">
                            News
                        </ReactBootStrap.Nav.Link>
                        {/* <ReactBootStrap.NavDropdown title="Shop" id="basic-nav-dropdown">
>>>>>>> 6a5e6f3854ca170d3aa0d223b9acd171f11d8f23
        <>
            <ReactBootStrap.Navbar sticky="top" bg="light" expand="lg">
                <ReactBootStrap.Navbar.Brand href="#home">
                    Official site{' '}
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.NavLink as={Link} to="/">
                            Home
                        </ReactBootStrap.NavLink>
                        <ReactBootStrap.NavLink as={Link} to="/Shop">
                            Shop
                        </ReactBootStrap.NavLink>
                        <ReactBootStrap.Nav.Link as={Link} to="/Authorization">
                            Log in
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/ContactUs">
                            Contact Us
                        </ReactBootStrap.Nav.Link>
                        {/* <ReactBootStrap.NavDropdown title="Shop" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="/shop">
                  Shoping
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/basket">
                  basket
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/Registr">
                  Registr
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown> */}
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Form inline>
                        <div className="p-dropdown">
                            <select
                                style={{ paddingRight: 25, cursor: 'pointer' }}
                                value={state}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            {/* <a onClick={ofclick} href="http://localhost:3000/">
                  <i className="icon-globe"></i>
                  <span>EN</span>
                </a>
                <ul className="p-dropdown-content">
                  <li>
                    <a onClick={ofclick} href="http://localhost:3000/">
                      French
                    </a>
                  </li>
                  <li>
                    <a onClick={ofclick} href="http://localhost:3000/">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a onClick={ofclick} href="http://localhost:3000/">
                      English
                    </a>
                  </li>
                </ul> */}
                        </div>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </>
    );
}
