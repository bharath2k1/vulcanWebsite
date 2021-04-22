import React from "react";
import "./FooterStyle.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function FooterComponent() {
  return (
    <div>
      <footer class="ftco-footer ftco-section" data-aos="slide-up">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4" data-aos="zoom-in">
                <h2 class="ftco-heading-2">About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class="ftco-animate">
                    <a href="/">
                      <span class="icon-twitter">
                        <TwitterIcon />
                      </span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a href="/">
                      <span class="icon-facebook">
                        <FacebookIcon />
                      </span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a href="/">
                      <span class="icon-instagram">
                        <InstagramIcon />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-4">
                <h2 class="ftco-heading-2">Links</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Services</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Business Strategy
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Data Analysis
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <span class="icon icon-map-marker">
                        <RoomIcon />
                      </span>
                      <span class="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="/">
                        <span class="icon icon-phone">
                          <PhoneIcon />{" "}
                        </span>
                        <span class="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="icon icon-envelope">
                          <EmailIcon />
                        </span>
                        <span class="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved |
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
