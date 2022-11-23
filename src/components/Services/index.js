import React, {useEffect, useRef} from "react";
import "./styles.scss";
import Aos from 'aos';
import "aos/dist/aos.css"

import { RiArrowRightLine} from "react-icons/ri";

import imgGirl from "./images/food3.jpg";
import imgBoy from "./images/food4.jpg";
//import arrow from './images/arrow-right.svg'

function Services() {
 
  useEffect(() => {
    Aos.init({duration:1000});
    },[]);

  return (
    <div id='services' className="hero" >
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" data-aos='fade-up' data-aos-delay='50'>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              {/* <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <RiArrowRightLine/>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
          <div className="hero-images" data-aos='fade-right' >
            <div   className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Services;