import './style/app.css'
import {Link} from 'react-scroll'

export default function App() {
	return (
		<div className='App'>
			<header className='nav'>
				<nav className='nav__container__actions'>
					<ul>
						<li><Link activeClass='active' smooth spy to='about'>HOME</Link></li>
						<li><Link activeClass='active' smooth spy to='projects'>ABOUT</Link></li>
						<li><Link activeClass='active' smooth spy to='blog'>PROJECTS</Link></li>
						<li><Link activeClass='active' smooth spy to='contact'>CONTACT</Link></li>
					</ul>
				</nav>
			</header>
			<section id='about'>Home</section>
			<section id='blog'>About</section>
			<section id='projects'>Projects</section>
			<section id='contact'>Contact</section>
		</div>
	)
}