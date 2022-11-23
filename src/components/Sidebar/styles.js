import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import{Link as LinkS} from 'react-scroll'
import{Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`
	position:fixed;
	z-index:999;
	width:100%;
	height:100%;
	background: rgba(59, 59, 59, 0.90);
	display:grid;
	align-items: center;
	top:20vh;
	left:0;
	transition:0.3s ease-in-out;
	 opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
	top:${({isOpen}) => (isOpen ? '0' : '-100%')}; 
	
`;


export const CloseIcon = styled(FaTimes)`
	color:#fff;

`;

export const Icon = styled.span`
	position:absolute;
	top:1.2rem;
	right:1.5rem;
	background:transparent;
	font-size: 2rem;
	cursor: pointer;
	outline:none;

	@media screen and (max-width:760px){
		font-size: 1.5rem;
		top:1.48rem;
		right:1.8rem;
	}
`;

export const SidebarWrapper = styled.div`
top:20vh;
height:80vh;
		color:#494745;
		display:flex;
	align-items: center;
	justify-content: center;
;


`;

export const SidebarMenu = styled.ul`

	display: grid;
	grid-template-columns:2fr;
	grid-template-rows: repeat(6,70px);
	text-align:center;
	// margin-top:10rem;
	//padding-top:40 rem;
	padding-right:3rem ;
	@media screen and (max-width:760px){
		
		grid-template-rows: repeat(6,90px);
	}
`;

export const Hoverspan = styled.span`
display:none;

&:hover {
	display:block;
}
`

export const SidebarLink = styled(LinkS)`

	font-size: 2rem;
	text-transform: uppercase;
	list-style:none;
	
	font-weight:200;
	transition:0.2s ease-in-out;
	text-decoration:none;
	color:#fff;
	cursor: pointer;

	&:hover {
		color:#fff;
		//font-style:italic;
		font-weight:400;
		transform: scale(1.25);
		transition:0.2s ease-in-out;
	}

	@media screen and (max-width:760px){
		font-size: 1.8rem;
		
	}
`;


export const SidebarLinkpg = styled(LinkR)`

	font-size: 2rem;
	text-transform: uppercase;
	list-style:none;
	
	font-weight:200;
	transition:0.2s ease-in-out;
	text-decoration:none;
	color:#fff;
	cursor: pointer;

	&:hover {
		color:#fff;
		//font-style:italic;
		font-weight:400;
		transform: scale(1.25);
		transition:0.2s ease-in-out;
	}

	@media screen and (max-width:760px){
		font-size: 1.8rem;
		
	}
`;

