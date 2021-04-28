import React from 'react'
import { Link } from "react-router-dom";

import "./ProductItem.style.css"

function ProductCard(props) {
    return (
        <div class="portfolio card-flex" id="portfolio" >
            <div
              class=" portfolio-item "
           
            >
              <Link to={props.link} >
              
              <div class="portfolio-wrap">
                <div class="portfolio-img">
                  <img href="/product" src={props.image} alt="Image" />
                </div>
                <div class="portfolio-text">
                  <h3>{props.name}</h3>
                  <a
                    class="btn"
                    href={props.link}
                    data-lightbox="portfolio"
                  >
                    +
                  </a>
                </div>
              </div>
              </Link>
            </div>
           
            
        </div>
    )
}

export default ProductCard
