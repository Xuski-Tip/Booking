import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function HeaderUpper() {
    const [state, setState] = useState('EN');
    function handleChange(event) {
        event.preventDefault();
        setState(event.target.value);
    }
    console.log(state);
    return (
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
                                value={state}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="UZ">UZ</option>
                                <option value="RU">RU</option>
                                <option value="EN">EN</option>
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
                        <ReactBootStrap.FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <ReactBootStrap.Button
                            className="btn-search"
                            variant="outline-success"
                        >
                            Search
                        </ReactBootStrap.Button>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </>
    );
}
