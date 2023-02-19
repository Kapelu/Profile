import { Link } from "react-router-dom"

export default function Nav(){
    <nav className='nav__container__actions'>
					<ul>
						<li><Link activeClass='active' smooth spy to='home'>HOME</Link></li>
						<li><Link activeClass='active' smooth spy to='about'>ABOUT</Link></li>
						<li><Link activeClass='active' smooth spy to='projects'>PROJECTS</Link></li>
						<li><Link activeClass='active' smooth spy to='contact'>CONTACT</Link></li>
					</ul>
				</nav>
}