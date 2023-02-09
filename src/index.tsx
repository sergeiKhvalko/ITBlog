import ReactDom from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "./shared/contexts";

ReactDom.render(
	<ThemeProvider>
		<Router>
			<App/>
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
)