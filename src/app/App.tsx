import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import Elipses from '@/shared/Elipses/Elipses'
import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'

const App = () => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<div className={cn('app', {}, [theme])}>
			<Elipses />

			<button onClick={toggleTheme}>Change Theme</button>

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