

import styled from 'styled-components'

export const InfoContainer = styled.div`
color:#fff;
width: 1280px;
	min-width: 1280px;
	margin: 0 auto;
//background:${({lightBg}) => (lightBg ? '#000' : '#f9f9')};

@media screen and (max-width:786px)
{
	padding:100px 0;
}
`

export const InfoWrapper = styled.div`
	display:flex;
	z-index:1;
	height:600px;
	width:100%;
	
	margin-left: auto;
	margin-right: auto;
	padding:0 24px;
	justify-content: center;


`;

export const InfoRow = styled.div`
	/* display:grid;
	grid-auto-columns: minmax(auto 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1 ' 'col2 col2'`)};

	@media screen and (max-width: 768px){
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1 ' 'col2 col2'`)};
	} */
	display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 24px;
	  
      height: 100vh;
	  width: 100%;
	  flex-direction:${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

	  @media screen and (max-width: 768px){
		flex-direction:${({imgStart}) => (imgStart ? 'column-reverse' : 'column')};
	}
`;

export const  Column1 = styled.div`
	margin-bottom: 15px;
	width:40%;
	padding:0 15px;
	grid-area:col1;

`;

export const  Column2 = styled.div`
	margin-bottom: 15px;
	padding:0 15px;
	grid-area:col2;

`;

export const TextWrapper = styled.div`
	max-width:540px;
	padding-top: 0;
	padding-bottom: 60px;
	
`;

export const TopLine = styled.p`
	color:#494745;
	font-size:16px;
	letter-spacing:5px;
	line-height:16px;
	font-weight:700px;
	//letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;


`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 38px;
line-height: 1.1;
font-weight: 500;
color:${({lightText}) => (lightText ? '#f7f8fa' : '#494745')};

@media screen and (max-width: 480px)
{
	font-size: 32px;

}

`;

export const Subtitle = styled.div`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color:${({darkText}) => (darkText ? '#494745' :'#fff')};

`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height:100%;
`;

export const  Img = styled.img`
	max-width:100%;
	margin :0 0 10px 0;
	padding-right:0;
`;



