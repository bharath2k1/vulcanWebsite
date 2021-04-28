import React from "react";
import "./Products.style.css";
import DetailsThumb from "./Detailsthumb";
import sodiumBentonite1 from "../../../Images/sodiumBentonite1.jpeg";
// import sodiumBentonite2 from "../../../Images/sodiumBentonite2.jpg";
// import sodiumBentonite3 from "../../../Images/sodiumBentonite3.jpg";
// import sodiumBentonite4 from "../../../Images/sodiumBentonite4.jpg";
import BannerComponent from "./Banner/BannerComponent";
import BasicTable from "./BasicTable";
import Carousel from "react-multi-carousel";
import MineralCard from "../../Home/MineralsCourousel/MineralCard/MineralCard";
import ProductCard from "../ProductsPage/ProductItem/ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class ProductComponent extends React.Component {
  state = this.props.data;
  _isMounted = false;

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    this._isMounted = true;
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    // console.log(this.props);
    const { products, index } = this.state;
    // console.log(products);

    return (
      <div>
        <div>
          {products.map((item) => (
            <BannerComponent
              title={item.title}
              text={item.description}
              btn="Get Best Quote"
            />
          ))}

          {products.map((item) => (
            <div className="details" key={item._id}>
              <div>
                <div className="big-img">
                  <img src={item.src[index]} alt="sodium bentomite" />
                  <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  />
                </div>
              </div>

              <div className="box1">
                <div className="row">
                  <h2>{item.title}</h2>
                  {/* <span>${item.price}</span> */}
                </div>

                <BasicTable table={item.specifications} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <a class="btn" href="">
                  Yes! I'm interested
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div
            class="section-header text-center wow zoomIn mineral-item productitem"
            data-wow-delay="0.1s"
            data-aos="zoom-in"
          >
            <p>Products</p>
            <h2>Our more Products</h2>
          </div>
          <Carousel
            containerClass="carousel-container"
            responsive={responsive}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
            <ProductCard
              name="sodium Bentonite"
              image={sodiumBentonite1}
              link="/sodiumbentonite"
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
