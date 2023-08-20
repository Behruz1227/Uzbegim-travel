import { Route, Routes } from 'react-router-dom';
import Spinners from './components/spinnerslar/Spinners';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Spinners />}/>
		</Routes>
	);
}

export default App;
