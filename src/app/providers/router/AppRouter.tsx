import { PageLoader } from '@/widgets/PageLoader/PageLoader'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from './routeConfig'

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map(item => (
				<Route
					key={item.path}
					path={item.path}
					element={(
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">
								{item.element}
							</div>
						</Suspense>
						
					)} />
			))}
		</Routes>
	)
}