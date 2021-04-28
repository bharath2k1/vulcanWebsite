import React from "react";
import about from "../../../Images/about.jpeg";
import "./AboutStyle.css";

function AboutComponent() {
  return (
    <div>
      <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img">
                <img src={about} alt="Image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-header text-left">
                  <p>Learn About Us</p>
                  <h2>Years of Experience</h2>
                </div>
                <div class="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                  </p>
                </div>

                <a class="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
