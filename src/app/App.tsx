import { Link } from 'react-router-dom'
import './styles/index.scss'
import Elipses from '@/shared/Elipses/Elipses'
import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { AppRouter } from './provider/router/AppRouter'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={cn('app', [theme])}>
			<Elipses />
			<Navbar />
			<main className="page-content">
				<Sidebar />
				<AppRouter />
			</main>
			
		</div>
	)
}

export default App