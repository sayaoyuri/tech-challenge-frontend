import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import TrackingDetailsPage from './pages/TrackingDetails';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tracking/details/:id" element={<TrackingDetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
