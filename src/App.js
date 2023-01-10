import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Metronome from "./Metronome/Metronome";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
			</Route>
			<Route path="/project">
				<Route
					path="metronome"
					element={<Metronome />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
