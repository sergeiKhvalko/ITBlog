import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'

const App = () => {
	return (
		<div className="app">

			<Link to={'/'}>MainPage</Link>
			<Link to={'/about'}>AboutPage</Link>
			
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/about'} element={<AboutPage />} />
				</Routes>
			</Suspense>
			
		</div>
	)
}

export default App