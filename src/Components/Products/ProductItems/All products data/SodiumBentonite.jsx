import React, { Component } from 'react'
import ProductComponent from '../ProductComponent';
import sodiumBentonite1 from "../../../../Images/sodiumBentonite1.jpeg";
import sodiumBentonite2 from "../../../../Images/sodiumBentonite2.jpg";
import sodiumBentonite3 from "../../../../Images/sodiumBentonite3.jpg";
import sodiumBentonite4 from "../../../../Images/sodiumBentonite4.jpg";

export default class SodiumBentonite extends Component {

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

        
      },
    ],
    index: 0,
  }; 

    render() {
        return (
            <div>
                <ProductComponent data={this.state}/>
            </div>
        )
    }
}
