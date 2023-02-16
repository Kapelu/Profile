import './style/app.css'
import {Link} from 'react-scroll'

export default function App() {
	return (
		<div className='App'>
			<header className='nav'>
				<nav className='nav__container__actions'>
					<ul>
						<li><Link activeClass='active' smooth spy to='home'>HOME</Link></li>
						<li><Link activeClass='active' smooth spy to='about'>ABOUT</Link></li>
						<li><Link activeClass='active' smooth spy to='projects'>PROJECTS</Link></li>
						<li><Link activeClass='active' smooth spy to='contact'>CONTACT</Link></li>
					</ul>
				</nav>
			</header>
			<section id='home'>Home</section>
			<section id='about'>About</section>
			<section id='projects'>Projects</section>
			<section id='contact'>Contact</section>
		</div>
	)
}