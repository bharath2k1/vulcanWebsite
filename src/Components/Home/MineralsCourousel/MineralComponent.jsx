import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { Carousel } from 'react-responsive-carousel';
// import  Carousel  from 'react-elastic-carousel';

// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Graphite from "../../../Images/Graphite.jpg";
import CalciumCarbonate from "../../../Images/CalciumCarbonate.jpeg";

import "./MineralStyle.css";
import MineralCard from "./MineralCard/MineralCard";

const subject =
  " Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function MineralComponent() {
  return (
    <div >
      <div class="team" id="team">
          <div className="box">
        <div
          class="section-header text-center wow zoomIn mineral-item"
          data-wow-delay="0.1s"
        >
          <p>Minerals</p>
          <h2>Minerals and More</h2>
        </div>
        <div class="row">
          <Carousel
            containerClass="carousel-container"
            responsive={responsive}
            
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <MineralCard
              name="Calcium Carbonate"
              image={CalciumCarbonate}
              subject={subject}
            />
            <MineralCard name="Graphite" image={Graphite} subject={subject} />
            <MineralCard
              name="Calcium Carbonate"
              image={CalciumCarbonate}
              subject={subject}
            />
            <MineralCard name="Graphite" image={Graphite} subject={subject} />
            <MineralCard
              name="Calcium Carbonate"
              image={CalciumCarbonate}
              subject={subject}
            />
            <MineralCard name="Graphite" image={Graphite} subject={subject} />
          </Carousel>
        </div>
        </div>
      </div>
     
    </div>
  );
}

export default MineralComponent;
