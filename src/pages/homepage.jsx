import React,{useState,useEffect} from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Gallary from '../components/Gallery/gallary';


import Hero from '../components/Hero';
import { ServiceObjOne, ServiceObjOne2, ServiceObjOne3 } from '../components/Info/data';
import Info from '../components/Info/info';




import Services from '../components/Services';



const Homepage = () => {

	const [offsetY,setOffsetY] = useState(0);
	const [offsetX,setOffsetX] = useState(0);

  const handelScroll = () => setOffsetY(window.pageYOffset);
  const handelScrollX = () => setOffsetX(window.pageXOffset);
 

 

  useEffect(() => {
	  window.addEventListener("scroll", handelScroll);
	  window.addEventListener("scroll", handelScrollX);
	

	  return () => window.removeEventListener("scroll",handelScroll);
	  
  },[] );

	return (
		<div>
			
			<Hero offsetY={offsetY}/>
			 <About />
			
			
			<Gallary />
			<About />
			<Services  />
			
			
// 			<Info {...ServiceObjOne} />
			
			
// 			<Info {...ServiceObjOne2} />
// 			<Info {...ServiceObjOne3}  />
		
			<Contact/>
		</div>
	)
}

export default Homepage;
