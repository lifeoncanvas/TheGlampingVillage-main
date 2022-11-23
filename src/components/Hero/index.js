import React,{useState,useEffect} from 'react';
import './styles.scss';
import t1 from '../../Images/t1.jpg';
import { MdPhotoAlbum, MdPlayCircleFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
import VideoModel from './useModal';
import Modal from "./Modal";
import useModal from './useModal';

const Hero = ({offsetY}) => {

	const [showVideo,setShowVideo] = useState(false);
	const {isShowing, toggle} = useModal();
	

	const clickHandler = ()=>{
		
		console.log("title")
	}
	return (
		
		<div className='bg-image'  >
			 
			<div className='overlay'>
			{/* <Modal
        isShowing={isShowing}
        hide={toggle}
      /> */}
			{/* <VideoModel showVideo={showVideo}/> */}
			<div className='info' style={{transform:`translateY(${offsetY * 0.3}px)`}}  >
				<h1 >The Glamping Village Pune </h1>
				{/* <button  onClick={clickHandler}>open</button>
				<button className="button-default" onClick={toggle}>Show Modal</button> */}
				{/* <Modal
        isShowing={isShowing}
        hide={toggle}
      /> */}
				{/* <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
	  */}

				{/* <p>Whether you are staying at home with family or spending time with friends this upcoming holiday</p>
				 */}
					
					{/* <Link className='button'  >  <MdPlayCircleFilled /> </Link>
				  */}
				
			</div>
			</div>

			
		</div>
	)
}

export default Hero;
