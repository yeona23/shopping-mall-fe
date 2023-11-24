import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
	useScrollToTop();

	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
