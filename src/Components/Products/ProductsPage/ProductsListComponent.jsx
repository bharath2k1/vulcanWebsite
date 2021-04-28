import React from "react";
import BannerComponent from "../ProductItems/Banner/BannerComponent";
import graphite from "../../../Images/Graphite.jpg";
import "./ProductsList.style.css";

import ProductCard from "./ProductItem/ProductCard";
import soilconditioner from "../../../Images/Soil-conditioner.jpeg";

function ProductsComponent() {
  return (
    <div>
      <BannerComponent title="Products List We Serve" text="" />
      <div class="portfolio" id="portfolio">
        <div class="container">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>Products</p>
            <h2>Our Ceramics Products</h2>
          </div>

          <div class="row portfolio-container flex-container" data-aos="zoom-in" >
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
            <ProductCard
              name="Sodium Bentomite"
              image={graphite}
              link="/product"
            />
          </div>
        </div>

        <div class="container">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>Products</p>
            <h2>Our Agriculture Products</h2>
          </div>

          <div class="row portfolio-container flex-container" data-aos="zoom-in" >
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
            <ProductCard
              name="Organic Soil Conditioner"
              image={soilconditioner}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
