import React, { useState } from 'react'

import "./NavbarComponent.css"


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
                <a href="index.html" class="navbar-brand">DevFolio</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="#home" class="nav-item nav-link active">Home</a>

                        <a  href="#about" class="nav-item nav-link">Business</a>
                        <a href="#service" class="nav-item nav-link">Products</a>
                        <a href="#experience" class="nav-item nav-link">operations & Binds</a>
                        <a href="#portfolio" class="nav-item nav-link">Quality policy</a>
                        <a href="#price" class="nav-item nav-link">Careers</a>
                        <a href="#review" class="nav-item nav-link">Contacts</a>
                        {/* <a href="#team" class="nav-item nav-link">Team</a>
                        <a href="#blog" class="nav-item nav-link">Blog</a>
                        <a href="#contact" class="nav-item nav-link">Contact</a> */}
                    </div>
                </div>
            </div>
        </div>
		</div>
	)
}

export default NavbarComponent
