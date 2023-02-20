import Nav from '../components/Nav'
import './home.css'

export default function Home() {
	return (
		<>
			<Nav />
			<div className='container'>
				<div className='imagen'>
					<img src='../img/profile.jpg' alt='' />
				</div>
				<div className='nombre'>
					<p>Home</p>
					<h1>Daniel Calderon</h1>
				</div>
				<div className='datos'>
					
				</div>
			</div>
		</>
	)
}
