import React from "react";
import "./MarketCard.styles.css";

function MarketCard(props) {
  return (
    <div>
      <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.0s">
        <div class="team-item">
          <div class="market-img">
            <img className="image" src={props.image} alt="Image" />
          </div>
          <div class="team-text">
            <h2>{props.name}</h2>

            <p>{props.subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
