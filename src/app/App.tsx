import './styles/index.scss'
import Elipses from '@/shared/ui/Elipses/Elipses'
import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { AppRouter } from './providers/router/AppRouter'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', [theme])}>
			<Suspense fallback="">
				<Elipses />
				<Navbar />
				<main className="page-content">
					<Sidebar />
					<AppRouter />
				</main>
			</Suspense>
		</div>
	)
}

export default App
