import React from "react";
import "./Agriculture.style.css";
import agriinfo from "../../Images/agriinfo.jpg";
import filtration from "../../Images/filtration.jpg";
import rubber from "../../Images/rubber.jpg";
import Typical from "react-typical";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Business from "../../Images/business.jpeg";
import FooterComponent from "../Footer/FooterComponent";

function Agriculture() {
  return (
    <div>
      <div class="banner wow zoomIn" data-wow-delay="0.1s" data-aos="zoom-in">
        <div class="container">
          <div class="section-header text-center">
            <p></p>
            <h2>Agriculture</h2>
          </div>
          <div class="container banner-text">
            <h2>
              <Typical
                steps={[
                  "Innovative approches for improved production",
                  2000,
                  "",
                  200,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
          </div>
        </div>
      </div>

      <div class="header">
        <div class="container">
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li>
                <a href="#Challenges">
                  CHALLENGES & SOLUTIONS <ArrowDropDownIcon />{" "}
                </a>
              </li>
              <li>
                <a href="#Applications">
                  APPLICATIONS
                  <ArrowDropDownIcon />
                </a>
              </li>
              <li>
                <a href="#business">
                  BUSINESS SUCCESS
                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="about-agri wow fadeInUp"
        data-wow-delay="0.1s"
        id="about-agri"
      >
        <div class="container-fluid">
          {/* <h1 className="letter">Challenges & Solutions</h1> */}
          <div
            class="section-agri text-center wow zoomIn header-agris"
            id="challenges"
            data-wow-delay="0.1s"
            data-aos="zoom-in"
          >
            <p>challenges</p>
            <h2>Challenges & Solutions</h2>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img" data-aos="zoom-in-right">
                <img src={agriinfo} alt="Image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content" data-aos="zoom-in-left" >
                <div class="section-header text-left">
                  <p>Learn About Me</p>
                </div>
                <div class="about-text" >
                  <p>
                    With the world population approaching 10 billion, farmers
                    are facing huge challenges as to how to feed growing
                    populations without destroying the soil, our health and
                    ultimately the planet.
                    <br />
                    At Imerys, we are leveraging our Science & Technology and
                    Business Development teams worldwide to develop innovative
                    natural solutions to the most pressing concerns facing
                    farmers today—be it declining soil quality, crop disease or
                    pesticide resistance. <br />
                    Our agriculture, aquaculture and animal welfare solutions
                    are based on an extensive portfolio of natural mineral
                    solutions—engineered to help farmers nourish and protect
                    their most valuable assets.
                    <br />
                    Our Dezone™ mechanical insecticide sustainably manages
                    insect pests in poultry farms and agricultural crops and
                    contributes to the fight against insecticide resistance.
                    AkuaPro™ is an antibiotic-free solution to address disease
                    in fish farming, the fastest growing food production sector
                    globally. For animal feed, SmectAgri® is an effective
                    aflatoxin binder and Diamol® is an excellent processing aid
                    and liquid, vitamin and enzyme carrier. Agroperl® improves
                    root development and substrate performance and Invelop®
                    guards crops against sunburn. New threats demand new
                    approaches. Across the business, we are investing in
                    long-term partnerships to build a brighter future for the
                    global agri-business sector through natural solutions.
                  </p>
                </div>
                <ul class="w3l-right-book mt-4">
                  <li>
                    <span aria-hidden="true"></span>Limiting antibiotics use to
                    combat antimicrobial resistance in humans and animals
                  </li>
                  <br />
                  <li>
                    <span aria-hidden="true"></span>Increasing agricultural
                    performance to produce enough food for the global population
                  </li>
                  <br />
                  <li>
                    <span aria-hidden="true"></span>Providing a sustainable and
                    safe mode of action for vector control
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid">
        <div
          class="section-agri text-center wow zoomIn header-agris"
          data-wow-delay="0.1s"
          data-aos="zoom-in"
          id="Applications"
        >
          <p>Applications</p>
          <h2>Related Applications</h2>
        </div>
        <div className="container agri-container">
          <div className="agri-img " data-aos="zoom-in">
            <img src={filtration} alt="filtration" />
            <h2>FILTRATION</h2>
          </div>
          <div className="agri-img " data-aos="zoom-in">
            <img src={rubber} alt="filtration" />

            <h2>PLASTICS & RUBBER</h2>
          </div>
        </div>

        
      </div>

      <div
            class="section-agri text-center wow zoomIn header-agris"
            id="business"
            data-wow-delay="0.1s"
            data-aos="zoom-in"
          >
            <p>Business</p>
            <h2>BUSINESS SUCCESS</h2>
          </div>
      <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="about-img"data-aos="zoom-in-right" >
                  <img src={Business} alt="Image" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-content" data-aos="zoom-in-left" >
                  <div class="section-header text-left"  >
                    <p>A specialized engineered mineral solution for fertilizers</p>
                    {/* <h2>10 Years Experience</h2> */}
                  </div>
                  <div class="about-text">
                    <p>
                      I-Cote™ is an excellent engineered, anti-caking solution
                      that considerably improves the shelf life of
                      low-compatible blended fertilizers. I-Cote™ is ideal for
                      producing new concentrated formulas that won’t cake during
                      storage, clog equipment and reduce fertilizer spread.
                      Adding I-Cote™ to high-nitrogen, concentrated fertilizers
                      and organo minerals helps keep particles separate, keeping
                      the fertilizer free-flowing and maximizing performance.
                      I-Cote™ offers excellent value to the fertilizer industry
                      as a high performance compatibilizer and long lasting
                      anti-caking agent.
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
        <FooterComponent />
    </div>
  );
}

export default Agriculture;
