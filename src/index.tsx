import ReactDom from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "./shared/contexts";

import '@/shared/config/i18n/i18n';

ReactDom.render(
	<ThemeProvider>
		<Router>
			<App/>
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
)