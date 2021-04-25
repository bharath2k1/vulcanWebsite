import React from 'react'
import "./MineralCard.styles.css"

function MineralCard(props) {
    return (
        <div>
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.0s"  data-aos="fade-up"
     data-aos-duration="3000"> 
                        <div class="team-item">
                            <div class="team-img">
                                <img src={props.image} alt="Image"/>
                            </div>
                            <div class="team-text">
                                <h2>{props.name}</h2>
                                
                                <p>
                                   {props.subject}
                                </p>
                             
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default MineralCard
// Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus