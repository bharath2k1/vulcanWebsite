import React from "react";
import "./Banner.style.css";

function BannerComponent(props) {
  return (
    <div>
      <div class="banner wow zoomIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="section-header text-center">
            <p></p>
            <h2>{props.title}</h2>
          </div>
          <div class="container banner-text">
            <p>{props.text}</p>
            {props.btn ? <a class="btn">{props.btn}</a> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
