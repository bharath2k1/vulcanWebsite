import React from "react";
import "./Products.style.css";
// import Colors from './components/Colors'
import DetailsThumb from "./Detailsthumb";
import sodiumBentonite1 from "../../Images/sodiumBentonite1.jpeg";
import sodiumBentonite2 from "../../Images/sodiumBentonite2.jpg";
import sodiumBentonite3 from "../../Images/sodiumBentonite3.jpg";
import sodiumBentonite4 from "../../Images/sodiumBentonite4.jpg";

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
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
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
    console.log(index);
    return (
      <div className="appbox">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="sodium bentomite" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              {/* <Colors colors={item.colors} /> */}

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <a class="btn" href="">Yes! I'm interested</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductComponent;
