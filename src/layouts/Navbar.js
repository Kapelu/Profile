import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../style/Navbar.css'

function Navbar() {
	const navRef = useRef()

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav')
	}

	return (
		<header>
			<nav ref={navRef}>
				<a href='/#'>Home</a>
				<a href='/#'>My work</a>
				<a href='/#'>Blog</a>
				<a href='/#'>About me</a>
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<h3>Daniel Calderon</h3>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	)
}

export default Navbar
