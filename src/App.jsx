import './style/app.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'

const router = createBrowserRouter([
	{
		path:'/',
		element: <Home/>,
		errorElement: <h1>Error 404</h1>
	},
	{
		path:'/about',
		element: <About />
	},
	{
		path:'/portfolio',
		element: <Portfolio />
	},
	{
		path:'/contact',
		element: <Contact />
	}
])


export default function App() {
	return (
		<div className='App'>
			<header className='nav'>
				<Nav />
			</header>
			<section>
			</section>
		</div>
	)
}