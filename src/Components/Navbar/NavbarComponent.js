import React, { useState } from "react";
// import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavbarComponent.css";

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

              <a href="#about" class="nav-item nav-link">
                Business
              </a>

              <a href="/products" class="nav-item nav-link">
                Products
              </a>

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
