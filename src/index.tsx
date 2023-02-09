import ReactDom from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root')
)