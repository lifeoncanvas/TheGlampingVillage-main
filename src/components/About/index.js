import React,{useRef,useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import campImg2 from './img2.jpg'
import campImg3 from './img3.jpg'
import campImg4 from './img4.jpg'
import './styles.scss'


const About = () => {

  useEffect(() => {
    Aos.init({duration:3000});
  },[]);
	return (
    <div id='about' className="container" style={{marginTop:"80px"}}>
		
      <div  className=" about-section " >
        
        
			
        <p >
          <span data-aos='fade-up'>He has been heir apparent as well as Duke it</span>
          <span data-aos='fade-up' data-aos-delay='100'>  reflects a combination of intent and  activities involved.</span>
          <span data-aos='fade-up' data-aos-delay='200'> and Duke of
          Rothesay since 1952, and is he same time. Fundamentally,</span>
          
        </p>
      </div>
      {/* <div className="image">
        <div className="img-container">
          <img
		  src={campImg3} />
        </div>
        <div className="img-container">
          <img
		  src={campImg4} />
        </div>
        <div className="img-container">
          <img
		  src={campImg2} />
        </div>
      
        
      </div> */}
      
      
    </div>
  );
}

export default About;
