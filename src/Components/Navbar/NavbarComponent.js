// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
// import { Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import "./NavbarComponent.css";










const options = [
  { key: 1, text: 'Ceramics', value: 1 , as: Link, to: '/'},
  { key: 2, text: 'Agriculture', value: 2, as: Link, to: '/agriculture' },
  
]



function NavbarComponent() {
  const [Navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div
        data-spy="scroll"
        // data-target=".navbar"
        data-offset="51"
        className={
          Navbar
            ? `navbar nav-sticky navbar-expand-lg bg-light navbar-light`
            : `navbar navbar-expand-lg bg-light navbar-light`
        }
      >
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            VULCAN
            <i class="fab fa-typo3" />
          </a>
          {/* <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              {/* <a href="#home" class="nav-item nav-link active">
                Home
              </a> */}
              <Link to="/" class="nav-item nav-link active">
                Home
              </Link>
{/* 
              <DropdownButton
                id="dropdown-variants-Info"
                title="Business"
                variant="info"
                className="editedbutton"
                style={{ background: "transparent", padding: "0px" }}
              >
                <Dropdown.Item href="#/action-1">Ceramics</Dropdown.Item>
                <Dropdown.Item href="/agriculture">Agriculture</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              {/* </DropdownButton>  */}


              <Dropdown className="nav-item nav-link" text='Business' options={options} />

              <a href="/products" class="nav-item nav-link">
                Products
              </a>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

              <a href="#experience" class="nav-item nav-link">
                operations & Binds
              </a>
              <a href="#portfolio" class="nav-item nav-link">
                Quality policy
              </a>
              <a href="#price" class="nav-item nav-link">
                Careers
              </a>
              <a href="#review" class="nav-item nav-link">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
