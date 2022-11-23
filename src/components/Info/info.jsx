import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./styles";

const Info = ({lightBg,id,imgStart,topLine,lightText,
	headline,darkText,description,img,alt}) => {

		useEffect(() => {
			Aos.init({duration:1000});
		  },[]);
	return (
		<div>
			<InfoContainer lighBg = {lightBg} id={id} >
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1 data-aos='fade-up'>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headline}</Heading>
							<Subtitle darkText={darkText}>{description}</Subtitle>
							
						</TextWrapper>
						</Column1>
						<Column2 data-aos='fade-right' data-aos-delay='50'>
						<ImgWrap>
						<Img src={img} alt={alt}/>
						</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</div>
	)
}

export default Info
