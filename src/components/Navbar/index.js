import React,{useState,useEffect} from 'react'
import {RiMenu4Fill} from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

const Navbar = ({toggle}) => {
	const[scrollNav,setScrollNav] = useState(false)

	const changeNav = () => {
		if(window.scrollY >= 60){
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll',changeNav)
	},[]);

	const toggleHome = () => {
		scroll.scrollToTop();
	}
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavContainer>
					<NavLogo  onClick={toggleHome}>Hamburg.</NavLogo>
					<MobileIcon  onClick={toggle} >
						<RiMenu4Fill/>
					</MobileIcon>
					{/* <NavMenu>
						<NavItem>
							<NavLinks to='about' 
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='active'
							>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='services'>Services</NavLinks>
						</NavItem>
					
						<NavItem>
							<NavLinks to='contact'>Contact</NavLinks>
						</NavItem>
					</NavMenu> */}
				</NavContainer>
			</Nav>

		</>
	)
}

export default Navbar;
