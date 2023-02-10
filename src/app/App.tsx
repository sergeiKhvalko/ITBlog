import { Link } from 'react-router-dom'
import './styles/index.scss'
import Elipses from '@/shared/Elipses/Elipses'
import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { AppRouter } from './provider/router/AppRouter'
import { Navbar } from '@/widgets/Navbar'

const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={cn('app', [theme])}>
			<Elipses />

			
			
			<Navbar />
			<AppRouter />
			
		</div>
	)
}

export default App