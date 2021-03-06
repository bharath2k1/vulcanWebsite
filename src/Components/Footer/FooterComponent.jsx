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
      <footer class="ftco-footer ftco-section" data-aos="zoom-out">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4" data-aos="zoom-in">
                <h2 class="ftco-heading-2">About</h2>
                <p>
                  Vulcan Ceramics Co Pvt Ltd is involved in B to B supply. It
                  started with the ceramic sector and now working with the
                  Ceramic , Cosmetics and Foundry sector.
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
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Careers
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
                <h2 class="ftco-heading-2">Industries We serve</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Agriculture Industry
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Cosmetic Prodcts
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Animal Nutrition & Health
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Fisheries
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span class="icon-long-arrow-right mr-2">
                        <ArrowRightAltIcon />
                      </span>
                      Cement & Construction
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
                        315/274, 2 Nd Floor, Westend Marg, Saidulajab, Near
                        Saket Metro Station, Delhi - 110030, India
                      </span>
                    </li>
                    <li>
                      <a href="/">
                        <span class="icon icon-phone">
                          <PhoneIcon />{" "}
                        </span>
                        <span class="text">
                          ++91-9810141644, +91-9910013595
                        </span>
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
