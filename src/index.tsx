import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './shared/contexts'

import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StoreProvider>
		<Router>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</Router>
	</StoreProvider>,
)
