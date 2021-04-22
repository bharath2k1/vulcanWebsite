import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LanguageIcon from "@material-ui/icons/Language";
import "./ContactIconsStyle.css";

function ContactIconsComponent() {
  return (
    <div className="contact">
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div
              class="section-header text-center wow zoomIn"
              data-aos="zoom-in"
              data-wow-delay="0.1s"
            >
              <p>Contact US</p>
              <h2>Our Excellent Projects</h2>
            </div>
          </div>

          <div className="row d-flex contact-info mb-5 flex-container">
            <div
              className="col-md-6 col-lg-3 d-flex ftco-animate icon-container"
              data-aos="flip-right"
            >
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-signs">
                    <HomeIcon style={{ width: "50px", height: "50px" }} />
                  </span>
                </div>
                <h3 className="mb-4">Address</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex ftco-animate icon-container"
              data-aos="flip-right"
            >
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2">
                    <CallIcon style={{ width: "50px", height: "50px" }} />
                  </span>
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex ftco-animate icon-container"
              data-aos="flip-right"
            >
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane">
                    <MailIcon style={{ width: "50px", height: "50px" }} />
                  </span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex ftco-animate icon-container"
              data-aos="flip-right"
            >
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-globe">
                    <LanguageIcon style={{ width: "50px", height: "50px" }} />
                  </span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactIconsComponent;
