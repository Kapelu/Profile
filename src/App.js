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
			<section id='projects'>
				<h1>Projects</h1>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis. Morbi tincidunt ornare massa eget egestas purus. Egestas sed tempus urna et. Hendrerit gravida rutrum quisque non tellus orci ac. Gravida dictum fusce ut placerat. Placerat vestibulum lectus mauris ultrices eros in. Sit amet dictum sit amet justo donec enim. Justo nec ultrices dui sapien eget mi proin sed libero. Urna neque viverra justo nec ultrices dui sapien eget mi. Aliquet bibendum enim facilisis gravida neque convallis a cras.

Amet cursus sit amet dictum sit amet justo donec. Morbi enim nunc faucibus a pellentesque sit amet. In nisl nisi scelerisque eu ultrices vitae auctor. Sem fringilla ut morbi tincidunt augue interdum velit. Amet est placerat in egestas erat imperdiet sed euismod. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Enim diam vulputate ut pharetra sit amet. Enim eu turpis egestas pretium aenean. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Faucibus scelerisque eleifend donec pretium. Fermentum dui faucibus in ornare quam. Ipsum dolor sit amet consectetur adipiscing elit ut. Fames ac turpis egestas integer eget aliquet nibh. Sapien pellentesque habitant morbi tristique senectus et netus et. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Morbi tristique senectus et netus et. Diam maecenas sed enim ut sem viverra aliquet. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.

Morbi tristique senectus et netus et. Eleifend mi in nulla posuere sollicitudin. Eu facilisis sed odio morbi quis commodo. Tempor orci eu lobortis elementum. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Faucibus nisl tincidunt eget nullam non nisi est sit. Rhoncus mattis rhoncus urna neque. Velit euismod in pellentesque massa. Vestibulum lorem sed risus ultricies tristique nulla. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Purus in massa tempor nec feugiat nisl pretium fusce. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.

Vivamus arcu felis bibendum ut. Tincidunt id aliquet risus feugiat in ante metus dictum. Volutpat maecenas volutpat blandit aliquam. Tempor orci eu lobortis elementum nibh. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Rhoncus mattis rhoncus urna neque viverra. Quisque id diam vel quam. Purus semper eget duis at tellus at. Ultricies leo integer malesuada nunc. Lectus sit amet est placerat in egestas erat imperdiet. Ut consequat semper viverra nam libero. Hendrerit dolor magna eget est. Diam vulputate ut pharetra sit amet aliquam id diam maecenas.

Cursus in hac habitasse platea dictumst. Dolor purus non enim praesent elementum facilisis leo. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Dolor magna eget est lorem ipsum dolor. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero nunc consequat interdum varius sit. Turpis egestas sed tempus urna et pharetra pharetra massa. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
				</p>
			</section>
			<section id='contact'>Contact</section>
		</div>
	)
}