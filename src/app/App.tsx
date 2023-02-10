import { Link } from 'react-router-dom'
import './styles/index.scss'
import Elipses from '@/shared/Elipses/Elipses'
import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { AppRouter } from './provider/router/AppRouter'

const App = () => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<div className={cn('app', {}, [theme])}>
			<Elipses />

			<button onClick={toggleTheme}>Change Theme</button>

			<Link to={'/'}>MainPage</Link>
			<Link to={'/about'}>AboutPage</Link>
			
			<AppRouter />
			
		</div>
	)
}

export default App