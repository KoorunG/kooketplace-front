import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainRouter from './MainRouter';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<MainRouter />
			<Footer />
		</>
	);
};

export default App;
