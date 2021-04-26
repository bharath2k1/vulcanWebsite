import React from "react";
import "./Products.style.css";
// import Colors from './components/Colors'
import DetailsThumb from "./Detailsthumb";
import sodiumBentonite1 from "../../../Images/sodiumBentonite1.jpeg";
import sodiumBentonite2 from "../../../Images/sodiumBentonite2.jpg";
import sodiumBentonite3 from "../../../Images/sodiumBentonite3.jpg";
import sodiumBentonite4 from "../../../Images/sodiumBentonite4.jpg";
import BannerComponent from "../Banner/BannerComponent";
// import { Table } from "react-bootstrap";
import BasicTable from "./BasicTable";
import MediaCard from "../MediaCard/MediaCard";
import Carousel from "react-multi-carousel";



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
  state = {
    products: [
      {
        _id: "1",
        title: "Sodium Bentonite",
        src: [
          `${sodiumBentonite1}`,
          `${sodiumBentonite2}`,
          `${sodiumBentonite3}`,
          `${sodiumBentonite4}`,
        ],
        description:
          "Bentonite is an absorbent aluminium phyllosilicate generally impure clay consisting mostly of montmorillonite, (Na,Ca)0.33(Al,Mg)2Si4O10(OH)2·(H2O)n.",
        content:
          "Bentonite minerals occur as lenses or seams containing up to 50% moisture. They are rocklike in nature and usually extracted by opencast mining (quarrying)\n sNatural sodium bentonite as the name suggests occurs with sodium as the predominant exchange cation. The name originates from its discovery near Fort Benton, USA. Sodium bentonites are characterized by high swelling, high liquid limit and high thermal durability",
        specifications: [
          {
            colour: "white",
            Packaging_size: "40KG",
            Packaging_Type: "HDPE Bags",
            Form: "Powder",
            Material: "Bentonite",
            Phvalue: "09-10%",
            ForMoreSpecifications: "Technical Data Sheet on Request only",
          },
        ],

        count: 1,
      },
    ],
    index: 0,
  };

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
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;

    // console.log(index);s

    return (
      <div>
        <div>
          {products.map((item) => (
            <BannerComponent title={item.title} text={item.description} />
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
                  <span>${item.price}</span>
                </div>

                <BasicTable
                  key={item.id}
                  specifications={item.specifications}
                />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <a class="btn" href="">
                  Yes! I'm interested
                </a>
              </div>
            </div>
          ))}
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
              
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
              <MediaCard/>
            
          </Carousel>
        
      </div>
    );
  }
}

export default ProductComponent;
