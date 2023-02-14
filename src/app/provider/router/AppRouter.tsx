import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from './routeConfig'

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(item => (
					<Route
						key={item.path}
						path={item.path}
						element={(<div className="page-wrapper">{item.element}</div>)} />
				))}
			</Routes>
		</Suspense>
	)
}