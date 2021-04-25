

import React from "react";
import Button from "@material-ui/core/Button";
// import  Carousel  from 'react-elastic-carousel';
import Typical from "react-typical";
// import ContactIconsComponent from "../../Contact/ContactIcons/ContactIconsComponent";
// import ContactsFormComponent from "../../Contact/ContactsForm/ContactsFormComponent";
import FooterComponent from "../../Footer/FooterComponent";
import AboutComponent from "../About/AboutComponent";
import Item from "../Markets/item";
// import Item from '../Markets/item';

import MineralComponent from "../MineralsCourousel/MineralComponent";

import "./HeaderComponentStyles.css";

function HeaderComponent() {
  return (
    <div>
      <div class="hero" id="home">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-6">
              <div class="hero-content">
                <div class="hero-text">
                  <h1>Welcome to Vulcan</h1>
                  <h2>
                    <Typical
                      steps={["Building Better Tommorow", 2000, "", 200]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </h2>
                </div>
                <div class="hero-btn">
                  
                    <button className="buttonedit" >
                    Contact Us
                    </button>
               

                  {/* <a class="btn" href="">
                    Contact Us
                  </a> */}
                </div>
              </div>
            </div>
            {/* <div class="col-sm-12 col-md-6 d-none d-md-block">
                        <div class="hero-image">
                            <img src={MiningPic} alt="Hero Image" />
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <AboutComponent />
      </div>

      <MineralComponent />

      <Item />
      <FooterComponent />
      {/* <ContactsFormComponent/> */}
    </div>
  );
}

export default HeaderComponent;
