import React,{useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css"
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'

const GallaryContainer = styled.div`
	width: 90vw;
	margin-top: 10rem;
	
	margin-left:auto;
	margin-right: auto;

	@media screen and (max-width: 760px){
		width: px;
	}
`;

const Wrapper = styled.div`
	
	display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 20px;

  img{
	  width: 100%;
	  height:100%;
	  object-fit: cover;
  }

  h2{
	 margin-top: 6rem;
	 font-weight: 200;
	 text-align: center;
  }

  @media screen and (max-width: 760px){
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 100px;
	grid-gap: 10px;

	h2{
	 margin-top: 2rem;
	 font-weight: 200;
	 font-size: 0.76rem;
	 text-align: center;
  }


	}
`;



const Gallary = () => {
	
	useEffect(() => {
		Aos.init({duration:3000});
	  },[]);

	return (
		<div>
			<GallaryContainer id='gallery'>
			{/* <h1>He has been heir apparent as well as Duke it</h1> */}
			<Wrapper>
  <div class="one"> <img src={img1} /></div>
  <div class="two"><img src={img2} /></div>
  <div class="three"><img src={img3} /></div>
  <div class="four"><img src={img4} /></div>
  <div class="five" ><h2 data-aos='fade-up'>Giving you time in something fun to bring onto</h2></div>
  <div class="six"><img src={img5} /></div>
  <div class="four"><img src={img6} /></div>
  <div class="five"><img src={img4} /></div>
  <div class="six"><img src={img1} /></div>
			</Wrapper>
			</GallaryContainer>
		</div>
	)
}

export default Gallary

