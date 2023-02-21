import ReactDom from 'react-dom'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './shared/contexts'

import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from './app/provider/ErrorBoundary'

ReactDom.render(
	<Router>
		<ErrorBoundary>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</ErrorBoundary>
	</Router>
	,
	document.getElementById('root')
)