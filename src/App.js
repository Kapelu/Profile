import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'

const Navbar = () => (
	<nav className='navbar'>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/section1'>Section 1</Link>
			</li>
			<li>
				<Link to='/section2'>Section 2</Link>
			</li>
			<li>
				<Link to='/section3'>Section 3</Link>
			</li>
			<li>
				<Link to='/section4'>Section 4</Link>
			</li>
			<li>
				<Link to='/section5'>Section 5</Link>
			</li>
		</ul>
	</nav>
)

const Home = () => (
	<div className='home'>
		<h1>Home</h1>
	</div>
)

const Section1 = () => (
	<div className='section section1'>
		<h1>Section 1</h1>
	</div>
)

const Section2 = () => (
	<div className='section section2'>
		<h1>Section 2</h1>
	</div>
)

const Section3 = () => (
	<div className='section section3'>
		<h1>Section 3</h1>
	</div>
)

const Section4 = () => (
	<div className='section section4'>
		<h1>Section 4</h1>
	</div>
)

const Section5 = () => (
	<div className='section section5'>
		<h1>Section 5</h1>
	</div>
)

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route path='/section1' component={Section1} />
			<Route path='/section2' component={Section2} />
			<Route path='/section3' component={Section3} />
			<Route path='/section4' component={Section4} />
			<Route path='/section5' component={Section5} />
		</Router>
	)
}

export default App
