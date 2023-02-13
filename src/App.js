import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className='App'>
			<nav className='App-nav'>
				<ul>
					<li>
						<Link to='#section1'>Sección 1</Link>
					</li>
					<li>
						<Link to='#section2'>Sección 2</Link>
					</li>
					<li>
						<Link to='#section3'>Sección 3</Link>
					</li>
					<li>
						<Link to='#section4'>Sección 4</Link>
					</li>
					<li>
						<Link to='#section5'>Sección 5</Link>
					</li>
				</ul>
			</nav>
			<main className='App-main'>
				<section id='section1' className='App-section'></section>
				<section id='section2' className='App-section'></section>
				<section id='section3' className='App-section'></section>
				<section id='section4' className='App-section'></section>
				<section id='section5' className='App-section'></section>
			</main>
		</div>
	)
}

export default App
