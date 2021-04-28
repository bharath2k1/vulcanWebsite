import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import agriculture from "../../../Images/agriculture.jpeg";
import Iron from "../../../Images/Iron.jpeg";
import "./item.css";
import MarketCard from "./MarketCard/MarketCard";

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
const subject =
  " Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus";

function Item() {
  return (
    <div className="market-item">
      <div
        class="section-header text-center wow zoomIn edit1"
        data-wow-delay="0.1s"
        data-aos="zoom-in"
      >
        <p>Markets</p>
        <h2>Markets and More</h2>
      </div>
      <Carousel
        responsive={responsive}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div data-aos="flip-up">
          <MarketCard
            name="agriculture"
            subject={subject}
            image={agriculture}
          />
        </div>
        <div data-aos="flip-down">
          <MarketCard name="Iron and Steel" subject={subject} image={Iron} />
        </div>
        <MarketCard name="agriculture" subject={subject} image={agriculture} />
        <MarketCard name="Iron and Steel" subject={subject} image={Iron} />
        <MarketCard name="agriculture" subject={subject} image={agriculture} />
        <MarketCard name="Iron and Steel" subject={subject} image={Iron} />
        <MarketCard name="agriculture" subject={subject} image={agriculture} />
        <MarketCard name="Iron and Steel" subject={subject} image={Iron} />
      </Carousel>
    </div>
  );
}

export default Item;
