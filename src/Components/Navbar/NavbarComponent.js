import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import "./NavbarComponent.css";

const options = [
  { key: 1, text: "Ceramics", value: 1, as: Link, to: "/" },
  { key: 2, text: "Agriculture", value: 2, as: Link, to: "/agriculture" },
];

function NavbarComponent() {
  const [Navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  // const closeMobileMenu = () => setClick(false);

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

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              <Link to="/" class="nav-item nav-link ">
                Home
              </Link>

              <Dropdown
                className="nav-item nav-link"
                text="Business"
                
                options={options}
              />

              <a href="/products" class="nav-item nav-link">
                Products
              </a>

              <a href="#experience" class="nav-item nav-link">
                Operations & Binds
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
