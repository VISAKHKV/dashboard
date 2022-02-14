import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/routing/routers/MainRouter";
import Store from "./components/contexts/store";

function App() {
	return (
		<Store>
			<BrowserRouter>
				<MainRouter />
			</BrowserRouter>
		</Store>
	);
}

export default App;
