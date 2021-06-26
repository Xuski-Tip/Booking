import React from "react";
import * as ReactBootStrap from "react-bootstrap";

class HeaderUpper extends React.Component {
  render() {
    return (
      <>
        <ReactBootStrap.Navbar sticky="top" bg="light" expand="lg">
          <ReactBootStrap.Navbar.Brand href="#home">
            Official site{" "}
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="Shop" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="/shop">
                  Shoping
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/basket">
                  basket
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/Registr">
                  Registr
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <ReactBootStrap.Button variant="outline-success">
                Search
              </ReactBootStrap.Button>
            </ReactBootStrap.Form>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </>
    );
  }
}
export default HeaderUpper;
